import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeveloperShowModel } from '@core/models/developer.model';
import { HandleRequestErrorService } from '@core/services/handle-request-error.service';
import { Subscription } from 'rxjs';
import { GithubTrendingService } from '../../services/github-trending.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit, OnDestroy {

  subscriptions = new Subscription();
  developers: DeveloperShowModel[] = [];
  columnDefs = [
    { field: 'name', headerName: 'Nome', tooltipField: 'name', flex: 1 },
    { field: 'repoName', headerName: 'Repositório', tooltipField: 'repoName', flex: 1 },
    { field: 'repoRescription', headerName: 'Descrição do repositório', tooltipField: 'repoRescription', flex: 2 },
  ];

  constructor(
    private githubTrendingService: GithubTrendingService,
    private handleErrorService: HandleRequestErrorService,
  ) { }

  ngOnInit(): void {
    this.subscriptions.add(this.githubTrendingService.getTrendingDev().subscribe(data => {
      this.developers = data.map(item => ({
        name: item.name,
        repoName: item.repo.name,
        repoRescription: item.repo.description,
      }));
    }, (err) => this.handleErrorService.handle('Houve um erro')));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
