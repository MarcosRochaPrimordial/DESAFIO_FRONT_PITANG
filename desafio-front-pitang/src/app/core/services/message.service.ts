import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageComponent } from '@shared/components/message/message.component';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private snackBarService: MatSnackBar
  ) { }

  public errorMessage(error: string, duration: number) {
    const snackbar = this.snackBarService.openFromComponent(MessageComponent, {
      duration: duration * 1000,
      data: {
        message: error,
        action: 'Ok',
        actionClick: () => snackbar.dismiss(),
      },
      panelClass: ['bg-color-error', 'font-color-error']
    });
  }
}
