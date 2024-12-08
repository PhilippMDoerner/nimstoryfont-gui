import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, map, of } from 'rxjs';
import {
  CustomAutocompleteProps,
  FormlyAutocompleteConfig,
  FormlyCheckboxConfig,
  FormlyDatepickerConfig,
  FormlyFileConfig,
  FormlyInputConfig,
  FormlyInterface,
  FormlyOverviewDisabledSelectConfig,
  FormlyOverviewSelectConfig,
  FormlyPasswordInterface,
  FormlyCustomSelectConfig as FormlyStaticSelectConfig,
  FormlyCustomStringSelectConfig as FormlyStaticStringSelectConfig,
  StaticOption,
} from 'src/app/_models/formly';
import { FormlySelectDisableFieldComponent } from 'src/design/organisms/formly-select-disable/formly-select-disable-field.component';
import { sortByProp } from 'src/utils/array';
import { capitalize } from 'src/utils/string';

@Injectable({
  providedIn: 'root',
})
export class FormlyService {
  buildOverviewSelectConfig<T>(
    config: FormlyOverviewSelectConfig<T>,
  ): FormlyFieldConfig {
    const isRequiredField = config.required ?? true;

    const options$ = isRequiredField
      ? config.options$
      : this.addEmptyOption(config.options$, config);
    const sortedOptions$ = this.sortOptions(options$, config);

    const validators = this.getValidators(config);

    return {
      key: config.key,
      type: 'select',
      className: config.className,
      wrappers: config.wrappers,
      hideExpression: config.hide,
      props: {
        label: config.label ?? capitalize(config.key),
        labelProp: config.labelProp,
        valueProp: config.valueProp ?? 'pk',
        options: sortedOptions$,
        required: config.required ?? true,
        disabled: config.disabled,
      },
      validators: {
        validation: validators,
      },
    };
  }

  buildDisableSelectConfig<T>(
    config: FormlyOverviewDisabledSelectConfig<T>,
  ): FormlyFieldConfig {
    const isRequiredField = config.required ?? true;

    const options$ = isRequiredField
      ? config.options$
      : this.addEmptyOption(config.options$, config);
    const sortedOptions$ = this.sortOptions(options$, config);

    const validators = this.getValidators(config);
    return {
      key: config.key,
      type: 'select-disable',
      className: config.className,
      wrappers: config.wrappers,
      hideExpression: config.hide ?? false,
      props: {
        label: config.label ?? capitalize(config.key),
        labelProp: config.labelProp,
        valueProp: config.valueProp ?? 'pk',
        options: sortedOptions$,
        required: config.required ?? true,
        warningMessage: config.warningMessage,
        additionalProperties: {
          disabledExpression: config.disabledExpression,
          tooltipMessage: config.tooltipMessage ?? 'WHAT',
          showWrapperLabel: config.showWrapperLabel ?? true,
        },
      },
      validators: {
        validation: validators,
      },
    } satisfies FormlyFieldConfig;
  }

  buildStaticSelectConfig(config: FormlyStaticSelectConfig): FormlyFieldConfig {
    const validators = this.getValidators(config);

    return {
      key: config.key,
      type: 'select',
      className: config.className,
      wrappers: config.wrappers,
      hideExpression: config.hide ?? false,
      props: {
        label: config.label ?? capitalize(config.key),
        options: config.options,
        required: config.required ?? true,
        disabled: config.disabled,
      },
      validators: {
        validation: validators,
      },
    };
  }

  buildStaticStringSelectConfig(
    partialConfig: FormlyStaticStringSelectConfig,
  ): FormlyFieldConfig {
    const optionStrings: string[] = partialConfig.options;

    let options: StaticOption[] = optionStrings.map((str) => {
      return { label: str, value: str };
    });

    const config: FormlyStaticSelectConfig = {
      ...partialConfig,
      options,
    };

    return this.buildStaticSelectConfig(config);
  }

  buildInputConfig(config: FormlyInputConfig): FormlyFieldConfig {
    const validators = this.getValidators(config);
    if (config.inputKind === 'NUMBER') {
      validators.push('notInteger');
    }
    if (config.inputKind === 'NAME') {
      //Why 'hasSpecialCharacters' validation? Names are used in URLs, they mustn't have special characters
      validators.push('hasSpecialCharacters');
    }

    let innerInputType: 'string' | 'number';
    switch (config.inputKind) {
      case 'NUMBER':
        innerInputType = 'number';
        break;
      default:
        innerInputType = 'string';
    }

    return {
      key: config.key,
      type: 'input',
      className: config.className,
      wrappers: config.wrappers,
      hideExpression: config.hide ?? false,
      parsers: config.parsers,
      props: {
        maxLength: config.maxLength,
        minLength: config.minLength,
        label: config.label ?? capitalize(config.key),
        type: innerInputType,
        required: config.required ?? true,
        disabled: !!config.disabled,
        placeholder: config.placeholder ?? undefined,
      },
      validators: {
        validation: validators,
      },
    };
  }

  buildSinglePasswordConfig(config: FormlyInterface): FormlyFieldConfig {
    const validators = this.getValidators(config);

    return {
      key: config.key,
      type: 'input',
      className: config.className,
      fieldGroupClassName: config.fieldGroupClassName,
      templateOptions: {
        label: config.label ?? 'Password',
        type: 'password',
        required: true,
        placeholder: 'Your password',
        disabled: config.disabled,
      },
      validators: {
        validation: validators,
      },
    };
  }

  buildConfirmedPasswordConfig(
    config: FormlyPasswordInterface,
  ): FormlyFieldConfig {
    const validators = config.validators ?? [];
    validators.push('required');

    const passwordField = {
      key: 'password', //Hard coded, fieldMatch validator depends on this
      type: 'input',
      className: config.className,
      templateOptions: {
        label: config.label ?? 'Password',
        type: 'password',
        required: true,
        placeholder: 'Password, at least 7 characters',
        disabled: config.disabled,
      },
      validators: {
        validation: validators,
      },
    };

    const confirmPasswordField = {
      key: 'passwordConfirm', //Hard coded, fieldMatch validator depends on this
      type: 'input',
      className: config.className,
      templateOptions: {
        label: config.label
          ? 'Confirm ' + config.label
          : 'Password Confirmation',
        type: 'password',
        required: true,
        placeholder: 'Please re-enter your password',
        disabled: config.disabled,
      },
    };

    return {
      validators: {
        validation: [
          { name: 'fieldMatch', options: { errorPath: 'passwordConfirm' } },
        ],
      },
      fieldGroup: [passwordField, confirmPasswordField],
    };
  }

  buildCheckboxConfig(config: FormlyCheckboxConfig): FormlyFieldConfig {
    return {
      key: config.key,
      type: 'checkbox',
      className: config.className,
      wrappers: config.wrappers,
      defaultValue: config.defaultValue,
      hideExpression: config.hide,
      props: {
        label: config.label ?? capitalize(config.key),
        required: config.required ?? true,
        disabled: config.disabled,
      },
    };
  }

  buildDatepickerConfig(config: FormlyDatepickerConfig): FormlyFieldConfig {
    const validators = this.getValidators(config);
    validators.push('date');

    return {
      key: config.key,
      type: 'datepicker',
      className: config.className,
      wrappers: config.wrappers,
      hideExpression: config.hide,
      props: {
        label: config.label ?? capitalize(config.key),
        required: config.required ?? true,
        disabled: config.disabled,
      },
      validators: {
        validation: validators,
      },
    };
  }

  buildFileFieldConfig(config: FormlyFileConfig): FormlyFieldConfig {
    const validators = this.getValidators(config);

    return {
      key: config.key,
      type: 'file',
      className: config.className,
      wrappers: config.wrappers,
      hideExpression: config.hide,
      props: {
        buttonType: config.fileButtonType ?? 'SECONDARY',
        fileFieldKind: config.fileFieldKind ?? 'IMAGE',
        label: config.label ?? capitalize(config.key),
        required: config.required ?? true,
        disabled: !!config.disabled,
      },
      validators: {
        validation: validators,
      },
    };
  }

  buildEditorConfig(config: FormlyInterface): FormlyFieldConfig {
    const validators = this.getValidators(config);

    return {
      key: config.key,
      type: 'text-editor',
      className: config.className,
      wrappers: config.wrappers,
      hideExpression: config.hide,
      props: {
        label: config.label ?? capitalize(config.key),
        required: config.required ?? true,
        disabled: config.disabled,
      },
      validators: {
        validation: validators,
      },
    };
  }

  buildAutocompleteConfig<T>(
    config: FormlyAutocompleteConfig<T>,
  ): FormlyFieldConfig {
    const validators = this.getValidators(config);

    return {
      key: config.key,
      type: 'autocomplete',
      className: config.className,
      wrappers: [...(config.wrappers ?? []), 'form-field'],
      props: {
        label: config.label ?? capitalize(config.key),
        required: config.required ?? true,
        disabled: config.disabled,
        additionalProperties: {
          optionLabelProp: config.optionLabelProp,
          optionValueProp: config.optionValueProp,
          optionKeyProp: config.optionKeyProp,
          loadOptions: config.loadOptions,
          initialValue$: config.initialValue$,
        } satisfies CustomAutocompleteProps<T>,
      },
      validators: {
        validation: validators,
      },
    };
  }

  /**
   * Convenience method to quickly turn a form of fields used to
   * create entries into one for updating entries.
   * Some fields are forbidden to be part of update forms and so they
   * will be filtered out of the form. These are:
   * - File Fields: The Browser does not allow to assign values to a file field
   *    Trying to do so will cause errors and crashes
   */
  toUpdateForm(fields: FormlyFieldConfig[]): FormlyFieldConfig[] {
    return fields.filter((field) => {
      const isFileField = field.type === 'file';
      return !isFileField;
    });
  }

  private getValidators(config: FormlyInterface) {
    const validators = config.validators ?? [];
    if (config.required) {
      validators.push('required');
    }

    return validators;
  }

  private addEmptyOption<T>(
    list: Observable<any[]> | any[],
    config: FormlyOverviewSelectConfig<T>,
  ): Observable<any[]> {
    if (Array.isArray(list)) {
      return of([this.createEmptyOption(config), ...list]);
    } else {
      return list.pipe(
        map((values) => [this.createEmptyOption(config), ...values]),
      );
    }
  }

  private createEmptyOption<T>(config: FormlyOverviewSelectConfig<T>) {
    const emptyOption: any = {};
    emptyOption[config.labelProp] =
      FormlySelectDisableFieldComponent.EMPTY_OPTION_LABEL;
    const valueProp = config.valueProp ?? config.key;
    emptyOption[valueProp] =
      FormlySelectDisableFieldComponent.EMPTY_OPTION_VALUE;
    return emptyOption;
  }

  private sortOptions<T>(
    list$: Observable<T[]>,
    config: FormlyOverviewSelectConfig<T>,
  ): Observable<T[]> {
    const { sortProp, sortDirection } = config;
    if (!sortProp) return list$;

    return list$.pipe(
      map((list) => sortByProp(list, sortProp, sortDirection ?? 'asc')),
    );
  }
}
