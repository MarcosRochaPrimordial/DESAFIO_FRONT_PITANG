import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserModel } from '@core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private URL_PRINCIPAL: string = 'https://api.github.com';

  constructor(
    private http: HttpClient,
  ) { }

  public getUsers(searchWord: string): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.URL_PRINCIPAL}/users/${searchWord}`);
  }
}
