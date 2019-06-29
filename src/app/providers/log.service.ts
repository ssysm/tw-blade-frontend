import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(
    private http: HttpClient
  ) { }
  public getLatestLog(): Observable<LogInterface.RootObject> {
    return this.http.get<LogInterface.RootObject>(environment.apiBase +  '/log/latest');
  }
  public getRangeOfLog(before: string, after: string): Observable<LogInterface.RootObject> {
    return this.http.get<LogInterface.RootObject>(environment.apiBase + '/log/range?before=' + before + '&after=' + after );
  }
}
