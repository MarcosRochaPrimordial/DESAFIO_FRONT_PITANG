import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchSubjectService {

  private searchSubject: Subject<any> = new Subject();
  search: Observable<any> = this.searchSubject.asObservable();

  constructor() { }

  searchAction() {
    this.searchSubject.next();
  }
}
