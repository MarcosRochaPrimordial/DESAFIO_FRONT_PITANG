import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MessageModel } from '@core/models/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  message: string;
  action: string;
  actionClick: Function;

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: MessageModel,
  ) { }

  ngOnInit(): void {
    this.message = this.data.message;
    this.action = this.data.action;
    this.actionClick = this.data.actionClick;
  }

  actionClickEvent() {
    this.actionClick();
  }

}
