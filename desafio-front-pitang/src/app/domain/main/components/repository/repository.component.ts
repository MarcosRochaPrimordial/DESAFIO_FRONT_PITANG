import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { RepositoryModel, RepositoryOutput, RepositoryResponseModel, RepositoryShowModel } from '@core/models/repository.model';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { SearchSubjectService } from '@core/services/search-subject.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

  repositoryList: RepositoryShowModel[] = [];
  @Input() userRepositories: boolean = false;
  @Input() set repository(repository: RepositoryResponseModel | RepositoryModel[]) {
    if (!!repository) {
      if (!this.userRepositories) {
        this.fillRepositoriesShowByRepositoryResponseModel(repository as RepositoryResponseModel);
      } else {
        this.fillRepositoriesShowByRepositoryModel(repository as RepositoryModel[]);
      }
    }
  }
  @Output() getRepositoriesOutput: EventEmitter<RepositoryOutput> = new EventEmitter<RepositoryOutput>();

  columnDefs = [
    { field: 'name', headerName: 'Nome', sortable: false, minWidth: 300, tooltipField: 'name' },
    { field: 'description', headerName: 'Descrição', sortable: false, minWidth: 500, tooltipField: 'description' },
    { field: 'language', headerName: 'Linguagem', sortable: false },
    { field: 'watchers', headerName: 'Estrelas', sortable: false },
    { field: 'license', headerName: 'Licença', sortable: false, tooltipField: 'license' },
    { field: 'updated_at', headerName: 'Atualizado', sortable: true },
  ];
  order: string = 'desc';
  pageEvent: PageEvent;
  pageSizeOptions: number[] = [5, 10, 25, 100, 200];

  constructor(
    private searchSubject: SearchSubjectService,
  ) {
    this.initPageEvent();
  }

  ngOnInit(): void {
    this.searchSubject.search.subscribe(() => {
      this.initPageEvent();
      this.getRepositories();
    });
  }

  getRepositories() {
    this.getRepositoriesOutput.emit({ order: this.order, perPage: this.pageEvent.pageSize, page: this.pageEvent.pageIndex + 1 });
  }

  onOrderSelectionChange() {
    this.initPageEvent();
    this.getRepositories();
  }

  initPageEvent() {
    this.pageEvent = new PageEvent();
    this.pageEvent.length = 0;
    this.pageEvent.pageSize = 25;
    this.pageEvent.pageIndex = 0;
  }

  updatePageEvent(pageEvent: PageEvent) {
    this.pageEvent = pageEvent;
    this.getRepositories();
  }

  fillRepositoriesShowByRepositoryResponseModel(repository: RepositoryResponseModel) {
    this.pageEvent.length = repository.total_count;
    this.pageEvent.pageSize = repository.perPage;
    this.pageEvent.pageIndex = repository.page;
    this.order = repository.order;
    this.repositoryList = repository.items.map(item => ({
      name: `${item.owner.login}/${item.name}`,
      description: item.description,
      language: item.language,
      license: item.license?.name,
      updated_at: moment(item.updated_at).format('HH:mm:ss DD/MM/YYYY'),
      watchers: item.watchers,
    }));
  }

  fillRepositoriesShowByRepositoryModel(repository: RepositoryModel[]) {
    this.repositoryList = repository.map(item => ({
      name: `${item.owner.login}/${item.name}`,
      description: item.description,
      language: item.language,
      license: item.license?.name,
      updated_at: moment(item.updated_at).format('HH:mm:ss DD/MM/YYYY'),
      watchers: item.watchers,
    }));
  }
}
