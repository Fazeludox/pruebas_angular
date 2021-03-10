import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private urlFake = 'api/fakeMock';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlFake)
  }

  getUserData(id: string ): Observable<User> {
      let fakeUser = this.urlFake+"/"+id;
      return this.http.get<User>(fakeUser);
  }



}
