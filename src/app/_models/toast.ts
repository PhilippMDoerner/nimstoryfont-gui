import { HttpErrorResponse } from '@angular/common/http';
import { ElementSize, ElementType } from 'src/design/atoms/_models/button';
import { Icon } from 'src/design/atoms/_models/icon';
import { copyToClipboard } from 'src/utils/clipboard';
import { capitalize } from 'src/utils/string';

export type ToastButton = {
  label: string;
  icon?: Icon;
  size?: ElementSize;
  type?: ElementType;
  onClick: (dismiss: () => void) => void;
};

export type ToastConfig = {
  type: ElementType | 'SUCCESS';
  important?: boolean;
  header?: {
    icon?: Icon;
    text: string;
  };
  body: {
    text: string;
    icon?: Icon;
    buttons?: ToastButton[];
  };
  dismissMs?: 3000;
  onHide?: () => void;
  onShow?: () => void;
  onToastClick?: (dismiss: () => void) => void;
  styles?: { [key: string]: string };
};

export function errorToast(err: HttpErrorResponse): ToastConfig {
  const buttons: ToastButton[] =
    err.status === 500
      ? [
          {
            label: 'Copy to Clipboard',
            icon: 'clipboard',
            type: 'PRIMARY',
            onClick: () => copyToClipboard(err.error),
          },
          {
            label: 'Close',
            icon: 'xmark',
            onClick: (dismiss) => dismiss(),
          },
        ]
      : [];

  return {
    type: 'DANGER',
    body: {
      text: getErrorBody(err),
      buttons,
    },
    header: { text: getErrorHeading(err) },
  };
}

export function successToast(
  itemName: string,
  action: 'create' | 'update',
): ToastConfig {
  return {
    type: 'SUCCESS',
    body: {
      text: `${capitalize(action)} "${itemName}"!`,
      icon: 'check',
    },
    // dismissMs: 3000,
    onToastClick: (dismiss) => dismiss(),
    styles: { width: '200px' },
  };
}

function getErrorHeading(error: HttpErrorResponse): string {
  switch (error.status) {
    case 0:
    case 504:
      return "This can't be done without an internet connection";
    case 200:
      return 'The target URL for the requested action does not seem to exist';
    case 500:
      return 'An error occurred on the server, unrelated to your input. Please copy the full error message and send it to the developer';
    default:
      return 'An error occurred';
  }
}

function getErrorBody(error: HttpErrorResponse): string {
  return JSON.stringify(error.error);
}
