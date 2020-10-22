import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HandleRequestErrorService {

  private defaultMessage = {
    404: 'Não encontrado',
  }

  constructor(
    private messageService: MessageService,
  ) { }

  public handle(err: HttpErrorResponse | string) {
    const finalErr: string = typeof err === 'object' ? this.defaultMessage[err.status] : err;
    this.messageService.errorMessage(finalErr, 10);
  }
}
