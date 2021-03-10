import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../interfaces/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  private urlFake2 = 'api/fakeMock2'

  getAllTransacctions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.urlFake2);
  }

  getTransacctions(relUser?: number): Observable<Transaction> {
    return this.http.get<Transaction>(this.urlFake2 + "/" + relUser);
  }


}

