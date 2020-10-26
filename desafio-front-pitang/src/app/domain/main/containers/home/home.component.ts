import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import historic from '@core/decorators/historic';
import { RepositoryResponseModel } from '@core/models/repository.model';
import { UserResponseModel } from '@core/models/user.model';
import { HandleRequestErrorService } from '@core/services/handle-request-error.service';
import { SearchSubjectService } from '@core/services/search-subject.service';
import { Utils } from '@core/utils/utils';
import { utils } from 'protractor';
import { Subscription } from 'rxjs';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  subscriptions = new Subscription();
  repository: RepositoryResponseModel;
  user: UserResponseModel;
  form: FormGroup;

  get Search() {
    return this.form.get('search');
  }

  constructor(
    private fb: FormBuilder,
    private githubService: GithubService,
    private handleError: HandleRequestErrorService,
    private searchSubject: SearchSubjectService,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.verifyHistoric();
  }

  private initForm() {
    this.form = this.fb.group({
      search: [null]
    });
  }

  @historic()
  search(searchWord: string) {
    this.Search.setValue(searchWord);
    this.searchSubject.searchAction();
  }

  verifyHistoric() {
    const searchWord = Utils.getLast('searchWord');
    if (!!searchWord) {
      this.Search.setValue(searchWord);
    }
    const repository = Utils.getLast('repository');
    if (!!repository) {
      this.repository = repository;
    }
    const user = Utils.getLast('user');
    if (!!user) {
      this.user = user;
    }
  }

  getRepositories({ order, perPage, page }) {
    if (!!this.Search.value) {
      this.subscriptions.add(this.githubService.getRepositories(this.Search.value, order, perPage, page).subscribe(data => {
        data.order = order;
        data.perPage = perPage;
        data.page = --page;
        this.repository = data;
        Utils.handleSessionStorage('repository', data);
      }, (err) => this.handleError.handle(err)));
    }
  }

  getUser({ perPage, page }) {
    if (!!this.Search.value) {
      this.subscriptions.add(this.githubService.getUsers(this.Search.value, perPage, page).subscribe(data => {
        data.perPage = perPage;
        data.page = --page;
        this.user = data;
        Utils.handleSessionStorage('user', data);
      }, (err) => this.handleError.handle('Houve um erro')));
    }
  }
}
