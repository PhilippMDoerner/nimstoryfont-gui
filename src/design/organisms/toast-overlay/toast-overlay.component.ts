import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  Injectable,
  signal,
} from '@angular/core';
import { NgbToast, NgbToastHeader } from '@ng-bootstrap/ng-bootstrap';
import { slideRight } from 'src/design/animations/slideDown';
import { ElementSize, ElementType, Icon } from 'src/design/atoms';
import { AtomsModule } from '../../atoms/atoms.module';

export type ToastConfig = {
  type: ElementType | 'SUCCESS';
  header: {
    icon?: Icon;
    text: string;
  };
  body: {
    text: string;
    buttons?: {
      label: string;
      icon?: Icon;
      size?: ElementSize;
      type?: ElementType;
      onClick: (dismiss: () => void) => void;
    }[];
  };
  dismissMs?: number;
  onHide?: () => void;
  onShow?: () => void;
};

@Injectable({ providedIn: 'root' })
export class ToastService {
  private toasts = signal<ToastConfig[]>([]);
  currentToast = computed<ToastConfig | undefined>(() => this.toasts()[0]);

  public addToast(newToast: ToastConfig, important = false) {
    const toasts = this.toasts();
    if (important) {
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
  imports: [NgbToast, NgbToastHeader, AtomsModule],
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

    const explicitIcon = currentToast.header.icon;
    if (explicitIcon != null) return explicitIcon;

    switch (currentToast.type) {
      case 'DANGER':
        return 'triangle-exclamation';
      case 'WARNING':
        return 'circle-exclamation';
      case 'INFO':
        return 'info';
      case 'SUCCESS':
        return 'check';
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
