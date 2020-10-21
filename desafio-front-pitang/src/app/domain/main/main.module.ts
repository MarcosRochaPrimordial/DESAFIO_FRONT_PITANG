import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { RecordsComponent } from './containers/records/records.component';
import { RankingComponent } from './containers/ranking/ranking.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './containers/home/home.component';
import { RepositoryComponent } from './components/repository/repository.component';
import { UserComponent } from './components/user/user.component';


@NgModule({
  declarations: [
    RecordsComponent,
    RankingComponent,
    SearchBarComponent,
    HomeComponent,
    RepositoryComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
  ]
})
export class MainModule { }
