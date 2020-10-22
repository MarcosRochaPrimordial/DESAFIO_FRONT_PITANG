import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MessageModel } from '@core/models/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  message: string;
  action: string;

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: MessageModel
  ) { }

  ngOnInit(): void {
    this.message = this.data.message;
    this.action = this.data.action;
  }

  actionClick() {
    console.log('Ok');
  }

}
