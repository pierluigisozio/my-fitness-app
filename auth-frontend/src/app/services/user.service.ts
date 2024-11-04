import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ILogoutPayload, IUserPayload} from '../models/users.model';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private baseUrl = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) {};

  registerUsername(payload : IUserPayload): Observable<any>{
    return this.http.post(`${this.baseUrl}/registerUsername/`, payload);
  }

  loginUsername(payload : IUserPayload): Observable<any>{
    return this.http.post(`${this.baseUrl}/loginUsername/`, payload);
  }

  logout(payload: ILogoutPayload): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout/`, payload)
  }

}
