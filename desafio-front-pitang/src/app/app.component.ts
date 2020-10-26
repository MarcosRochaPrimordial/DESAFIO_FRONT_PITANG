import { Component, OnInit } from '@angular/core';
import { LoadSpinnerService } from '@core/services/load-spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoadShow: boolean = false;

  constructor(
    private loadSpinner: LoadSpinnerService,
  ) {}

  ngOnInit() {
    this.loadSpinner.load.subscribe(value => {
      this.isLoadShow = value.show;
    });
  }
}
