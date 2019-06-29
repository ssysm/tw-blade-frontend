import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllTracker(page: number, limit: number): Observable<TrackerInterface.RootObject> {
    const params = new HttpParams().set('page', page.toString()).set('limit', limit.toString());
    return this.http.get<TrackerInterface.RootObject>(environment.apiBase + '/tracker/', { params });
  }

  public getTrackerByUid(uid: number): Observable<TrackerInterface.RootObject> {
    return this.http.get<TrackerInterface.RootObject>(environment.apiBase + '/tracker/uid/' + uid);
  }

  public createNewTracker(uid: number, displayName: string, remark: string): Observable<TrackerInterface.RootObject> {
    return this.http.post<TrackerInterface.RootObject>(environment.apiBase + '/tracker/single', { uid, displayName, remark });
  }

  public deleteTracker(uid: number): Observable<TrackerInterface.RootObject>  {
    return this.http.request<TrackerInterface.RootObject>('delete', environment.apiBase + '/tracker/single', { body: { uid } });
  }

}
