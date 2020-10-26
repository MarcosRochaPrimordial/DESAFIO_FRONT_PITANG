import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './containers/details/details.component';
import { HomeComponent } from './containers/home/home.component';
import { RankingComponent } from './containers/ranking/ranking.component';
import { RecordsComponent } from './containers/records/records.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'records',
    component: RecordsComponent,
  },
  {
    path: 'ranking',
    component: RankingComponent
  },
  {
    path: 'details/:login',
    component: DetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
