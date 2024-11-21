import { NgStyle, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  Injectable,
  signal,
} from '@angular/core';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastConfig, ToastType } from 'src/app/_models/toast';
import { slideRight } from 'src/design/animations/slideDown';
import { Icon } from 'src/design/atoms/_models/icon';
import { ButtonComponent } from 'src/design/atoms/button/button.component';
import { IconComponent } from 'src/design/atoms/icon/icon.component';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private toasts = signal<ToastConfig[]>([]);
  currentToast = computed<ToastConfig | undefined>(() => this.toasts()[0]);

  public addToast(newToast: ToastConfig) {
    const toasts = this.toasts();
    if (newToast.important) {
      this.toasts.set([newToast, ...toasts]);
    } else {
      this.toasts.set([...toasts, newToast]);
    }
  }

  public dismissToast() {
    const [_, ...newToastList] = this.toasts();
    this.toasts.set(newToastList);
  }
}

@Component({
  selector: 'app-toast-overlay',
  standalone: true,
  imports: [
    NgbToastModule,
    ButtonComponent,
    IconComponent,
    NgTemplateOutlet,
    NgStyle,
  ],
  animations: [slideRight],
  templateUrl: './toast-overlay.component.html',
  styleUrl: './toast-overlay.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastOverlayComponent {
  toastService = inject(ToastService);

  currentToast = this.toastService.currentToast;
  icon = computed<Icon | undefined>(() => {
    const currentToast = this.currentToast();
    if (!currentToast) return undefined;

    return this.toHeaderIcon(currentToast.type, currentToast.header?.icon);
  });

  dismissCurrentToast() {
    const currentToast = this.currentToast();
    if (!currentToast) return undefined;

    const onHide = currentToast.onHide;
    if (onHide) onHide();

    this.toastService.dismissToast();
  }

  private toHeaderIcon(
    toastType: ToastType,
    icon: Icon | undefined,
  ): Icon | undefined {
    if (icon != null) return icon;

    switch (toastType) {
      case 'DANGER':
        return 'triangle-exclamation' satisfies Icon;
      case 'WARNING':
        return 'circle-exclamation' satisfies Icon;
      case 'INFO':
        return 'info-circle' satisfies Icon;
      case 'SUCCESS':
        return 'check' satisfies Icon;
      default:
        return undefined;
    }
  }
}
