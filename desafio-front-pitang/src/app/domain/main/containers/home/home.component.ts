import { Component, OnInit } from '@angular/core';
import { UserModel } from '@core/models/user.model';
import { HandleRequestErrorService } from '@core/services/handle-request-error.service';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private githubService: GithubService,
    private handleErrorService: HandleRequestErrorService,
  ) { }

  ngOnInit(): void {
  }

  search(searchWord: string) {
    this.githubService.getUsers(searchWord).subscribe((data: UserModel) => {
      console.log(data);
    }, (err) => this.handleErrorService.handle(err));
  }

}
