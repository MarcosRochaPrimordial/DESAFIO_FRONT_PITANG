import { Injectable } from '@angular/core';
import { LoadModel } from '@core/models/load.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadSpinnerService {

  private loadsubject: Subject<LoadModel> = new Subject<LoadModel>();
  load = this.loadsubject.asObservable();

  constructor() { }

  public show() {
    this.loadsubject.next({ show: true });
  }

  public hide() {
    this.loadsubject.next({ show: false });
  }
}
