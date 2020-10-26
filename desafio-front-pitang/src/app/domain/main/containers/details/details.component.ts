import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositoryModel } from '@core/models/repository.model';
import { UserDetailModel } from '@core/models/user.model';
import { HandleRequestErrorService } from '@core/services/handle-request-error.service';
import { Subscription } from 'rxjs';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

  subscriptions = new Subscription();
  userDetails: UserDetailModel;
  repositories: RepositoryModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService,
    private handleErrorService: HandleRequestErrorService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.getUserDetails(param['login']);
      this.getRepositories(param['login']);
    })
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getUserDetails(login: string) {
    this.githubService.getUserDetails(login).subscribe(data => {
      this.userDetails = data;
    }, (err) => this.handleErrorService.handle(err));
  }

  getRepositories(login: string) {
    this.githubService.getRepositoriesByLogin(login).subscribe(data => {
      this.repositories = data;
    }, (err) => this.handleErrorService.handle(err));
  }

}
