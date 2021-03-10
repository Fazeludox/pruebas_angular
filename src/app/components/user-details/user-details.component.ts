import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user'
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit  {


  user: User;
  subscription$ !: Subscription;
  status: boolean;
  constructor(private userService:UsersService, private route:ActivatedRoute, private spinner:SpinnerService) {

    let idUser: string = this.route.snapshot.params['id'];
    this.status = true;

    this.subscription$ = this.userService.getUserData(idUser).subscribe(data => this.user = data);
  }


  ngOnInit(): void {
    this.spinner.sendBooleanObservable.subscribe( state => this.status = state )
    setTimeout( ()=>{
      this.subscription$.unsubscribe();
    }, 500 );
  }


}
