import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor(
    private http: HttpClient
  ) { }

  public lookupById(id: number): Observable<LookupInterface.RootObject> {
    return this.http.get<LookupInterface.RootObject>(environment.apiBase + '/lookup/id/' + id);
  }

  public lookupByDisplayName(displayName: string): Observable<LookupInterface.RootObject> {
    return this.http.get<LookupInterface.RootObject>(environment.apiBase + '/lookup/display_name/' + displayName);
  }
}
