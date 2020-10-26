import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { OutputModel } from '@core/models/output.model';
import { UserModel, UserResponseModel } from '@core/models/user.model';
import { SearchSubjectService } from '@core/services/search-subject.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userList: UserModel[] = [];
  @Input() set user(user: UserResponseModel) {
    if (!!user) {
      this.pageEvent.length = user.total_count;
      this.pageEvent.pageSize = user.perPage;
      this.pageEvent.pageIndex = user.page;
      this.userList = user.items;
    }
  }
  @Output() getUserOutput: EventEmitter<OutputModel> = new EventEmitter<OutputModel>();
  
  pageEvent: PageEvent;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  columnDefs = [
    { field: 'id', headerName: 'Id', sortable: false, minWidth: 100, flex: 1 },
    { field: 'login', headerName: 'Nome', sortable: false, tooltipField: 'name', flex: 2 },
  ];

  constructor(
    private searchSubject: SearchSubjectService,
    private router: Router,
  ) {
    this.initPageEvent();
  }

  ngOnInit(): void {
    this.searchSubject.search.subscribe(() => {
      this.initPageEvent();
      this.getUser();
    });
  }

  getUser() {
    this.getUserOutput.emit({ perPage: this.pageEvent.pageSize, page: this.pageEvent.pageIndex + 1 });
  }

  initPageEvent() {
    this.pageEvent = new PageEvent();
    this.pageEvent.length = 0;
    this.pageEvent.pageSize = 25;
    this.pageEvent.pageIndex = 0;
  }

  updatePageEvent(pageEvent: PageEvent) {
    this.pageEvent = pageEvent;
    this.getUser();
  }

  onCellClicked(event) {
    this.router.navigate(['details', event.data.login]);
  }
}
