import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UsersService) {
  }

  Users: User[]



  getUsers() {
    this.userService.getUsers().subscribe(data => {
      this.Users = data;
      console.log("Problemas");

    }, err => console.error(err)
    )
  }

  ngOnInit() {
    this.getUsers();
  }

}
