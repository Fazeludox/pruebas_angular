import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor() { }

  status:boolean = false;

  private sendBoolSubject = new Subject<boolean>();
  sendBooleanObservable = this.sendBoolSubject.asObservable();


  showSpinner(bool:boolean){
    this.status = bool;
    this.sendBoolSubject.next(bool);
  }

}
