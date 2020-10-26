import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeveloperModel } from '@core/models/developer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubTrendingService {

  private MAIN_URL: string = 'https://ghapi.huchen.dev';

  constructor(
    private http: HttpClient,
  ) { }

  getTrendingDev(): Observable<DeveloperModel[]> {
    let httpParams = new HttpParams()
      .set('language', '')
      .set('since', 'daily');

    return this.http.get<DeveloperModel[]>(`${this.MAIN_URL}/developers`, {
      params: httpParams
    });
  }
}
