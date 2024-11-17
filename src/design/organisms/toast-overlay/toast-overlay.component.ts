import { NgStyle, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  Injectable,
  signal,
} from '@angular/core';
import { NgbToast, NgbToastHeader } from '@ng-bootstrap/ng-bootstrap';
import { ToastConfig } from 'src/app/_models/toast';
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
    NgbToast,
    NgbToastHeader,
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

    const explicitIcon = currentToast.header?.icon;
    if (explicitIcon != null) return explicitIcon;

    switch (currentToast.type) {
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
  });

  dismissCurrentToast() {
    const currentToast = this.currentToast();
    if (!currentToast) return undefined;

    const onHide = currentToast.onHide;
    if (onHide) onHide();

    this.toastService.dismissToast();
  }
}
