import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserDetailModel, UserModel, UserResponseModel } from '@core/models/user.model';
import { RepositoryModel, RepositoryResponseModel } from '@core/models/repository.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private MAIN_URL: string = 'https://api.github.com';

  constructor(
    private http: HttpClient,
  ) { }

  public getUsers(searchWord: string, perPage: number = 10, page: number = 1): Observable<UserResponseModel> {
    let httpParams = new HttpParams()
      .set('q', searchWord)
      .set('per_page', perPage.toString())
      .set('page', page.toString());
    return this.http.get<UserResponseModel>(`${this.MAIN_URL}/search/users`, {
      params: httpParams,
    });
  }

  public getUserDetails(login: string): Observable<UserDetailModel> {
    return this.http.get<UserDetailModel>(`${this.MAIN_URL}/users/${login}`);
  }

  public getRepositories(searchWord: string, order: string = 'desc', perPage: number = 10, page: number = 1): Observable<RepositoryResponseModel> {
    let httpParams = new HttpParams()
      .set('q', searchWord)
      .set('sort', 'updated')
      .set('per_page', perPage.toString())
      .set('page', page.toString())
      .set('order', order);
    return this.http.get<RepositoryResponseModel>(`${this.MAIN_URL}/search/repositories`, {
      params: httpParams,
    });
  }

  public getRepositoriesByLogin(login: string): Observable<RepositoryModel[]> {
    return this.http.get<RepositoryModel[]>(`${this.MAIN_URL}/users/${login}/repos`);
  }
}
