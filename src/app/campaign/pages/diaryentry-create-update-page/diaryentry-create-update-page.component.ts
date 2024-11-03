import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import {
  combineLatest,
  distinctUntilChanged,
  interval,
  map,
  Observable,
  startWith,
} from 'rxjs';
import { DiaryEntry, DiaryEntryRaw } from 'src/app/_models/diaryentry';
import { OverviewItem } from 'src/app/_models/overview';
import { FormlyService } from 'src/app/_services/formly/formly-service.service';
import { sessionAlreadyHasAuthor } from 'src/app/_services/formly/validators';
import { RoutingService } from 'src/app/_services/routing.service';
import { GlobalStore } from 'src/app/global.store';
import { CreateUpdateState } from 'src/design/templates/_models/create-update-states';
import { filterNil } from 'src/utils/rxjs-operators';
import { TemplatesModule } from '../../../../design/templates/templates.module';
import { DiaryEntryCreateUpdatePageStore } from './diaryentry-create-update-page.store';

@Component({
  selector: 'app-diaryentry-create-update-page',
  standalone: true,
  imports: [TemplatesModule],
  templateUrl: './diaryentry-create-update-page.component.html',
  styleUrl: './diaryentry-create-update-page.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DiaryentryCreateUpdatePageComponent {
  private formlyService = inject(FormlyService);
  store = inject(DiaryEntryCreateUpdatePageStore);
  private globalStore = inject(GlobalStore);
  private route = inject(ActivatedRoute);
  private routingService = inject(RoutingService);

  private routeUrlSegments = toSignal(this.route.url);
  private authors$ = toObservable(this.store.authors).pipe(filterNil());
  private sessions$ = toObservable(this.store.sessions).pipe(filterNil());

  state = computed<CreateUpdateState>(() => {
    const pathSegments = this.routeUrlSegments()?.map(
      (segment) => segment.path,
    );
    const isUpdatePage = pathSegments?.includes('update');
    if (!isUpdatePage) {
      return 'CREATE';
    }

    const isOutdatedUpdate = this.store.serverModel() != null;
    if (isOutdatedUpdate) {
      return 'OUTDATED_UPDATE';
    } else {
      return 'UPDATE';
    }
  });

  heading = computed<string>(() => {
    switch (this.state()) {
      case 'CREATE':
        return 'Adding a new Diaryentry';
      case 'UPDATE':
      case 'OUTDATED_UPDATE':
        return `Updating Diaryentry "${this.store.diaryentry()?.title}"`;
    }
  });

  userModel = computed<DiaryEntry | Partial<DiaryEntryRaw>>(() => {
    switch (this.state()) {
      case 'CREATE':
        return {
          campaign: this.globalStore.currentCampaign()?.pk,
        } as Partial<DiaryEntryRaw>;
      case 'UPDATE':
      case 'OUTDATED_UPDATE':
        return this.store.diaryentry() as DiaryEntry;
    }
  });
  userModel$ = toObservable(this.userModel);

  formlyFields = computed<FormlyFieldConfig[]>(() => [
    this.formlyService.buildInputConfig({ key: 'title', inputKind: 'NAME' }),
    /**
     * This is overly complicated. The async validator out here is ONLY there to enable/disable the
     * submit button if these two fields don't conform to a specific thing. Dis/Enabling individual
     * options is done by the "disabledExpression" function. This is also true for the showing/hiding
     * of the error message.
     */
    {
      validators: {
        canWriteDiaryentry: {
          expression: (
            control: AbstractControl<{ author: number; session: number }>,
          ) => {
            const { author: authorPk, session: sessionPk } = control.value;
            return this.canSelectedAuthorAddDiaryentry(authorPk, sessionPk);
          },
          message: `Author already has written a Diaryentry`,
        },
      },
      fieldGroup: [
        //Author
        this.formlyService.buildOverviewSelectConfig({
          key: 'author',
          labelProp: 'username',
          sortProp: 'username',
          options$: this.authors$,
          campaign: this.globalStore.campaignName(),
        }),
        //Session
        this.formlyService.buildDisableSelectConfig({
          key: 'session',
          options$: this.sessions$,
          campaign: this.globalStore.campaignName(),
          disabledExpression: (
            options: Observable<OverviewItem[]>,
            _: FormlyTemplateOptions,
            control: AbstractControl,
          ) => {
            const currentlySelectedAuthor$ = interval(1000).pipe(
              map(() => control.parent?.value.author),
              startWith(control.parent?.value.author),
              distinctUntilChanged(),
            );

            const isOptionDisabled$ = combineLatest({
              options,
              selectedAuthor: currentlySelectedAuthor$,
            }).pipe(
              map(({ options, selectedAuthor }) => {
                console.log('Running');
                return options.map(
                  (opt) =>
                    !this.canSelectedAuthorAddDiaryentry(
                      selectedAuthor,
                      opt.pk as number,
                    ),
                );
              }),
            );
            return isOptionDisabled$;
          },
          tooltipMessage:
            'Sessions may be impossible to select if the selected author already has a diaryentry for that session.',
          warningMessage: sessionAlreadyHasAuthor.message,
          showWrapperLabel: false,
          labelProp: 'name',
          sortProp: '-session_number',
        }),
      ],
    },
  ]);

  disableSessionOption(
    sessionOption: OverviewItem,
    selectedAuthor: number,
    model: Partial<DiaryEntry> | undefined,
  ) {
    if (selectedAuthor == null) return false;

    const isSelectedOption = model?.session === sessionOption.pk;
    if (isSelectedOption) return false;

    const authorsWithDiaryentry = sessionOption.author_ids;
    if (authorsWithDiaryentry == null) return false;

    const hasDiaryentryInSession =
      authorsWithDiaryentry.includes(selectedAuthor);
    return hasDiaryentryInSession;
  }

  canSelectedAuthorAddDiaryentry(authorPk: number, sessionPk: number) {
    const session = this.store
      .sessions()
      ?.find((session) => session.pk === sessionPk);
    if (!session) return true;

    const authorsWithDiaryentryInSession = session.author_ids;
    if (authorsWithDiaryentryInSession == null) return true;

    if (authorsWithDiaryentryInSession.includes(authorPk)) {
      return false;
    }
    return true;
  }

  create(diaryentry: Partial<DiaryEntryRaw>) {
    this.store.createDiaryentry(diaryentry as DiaryEntryRaw);
  }

  update(diaryentry: Partial<DiaryEntryRaw>) {
    this.store.updateDiaryentry(diaryentry as DiaryEntry);
  }

  cancel() {
    const campaign = this.globalStore.campaignName();
    switch (this.state()) {
      case 'CREATE':
        this.routingService.routeToPath('diaryentry-overview', {
          campaign,
        });
        break;
      case 'UPDATE':
      case 'OUTDATED_UPDATE':
        this.routeToDiaryentry(this.store.diaryentry() as DiaryEntry);
        break;
    }
  }

  private routeToDiaryentry(diaryentry: DiaryEntry) {
    this.routingService.routeToPath('diaryentry', {
      campaign: this.globalStore.campaignName(),
      authorName: diaryentry.author_details?.name,
      sessionNumber: diaryentry.session_details?.session_number,
      isMainSession: diaryentry.session_details?.is_main_session_int,
    });
  }
}
