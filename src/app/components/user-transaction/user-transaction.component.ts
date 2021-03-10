import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { zip } from 'rxjs';
import { debounceTime, map, mergeMap } from 'rxjs/operators'
import { Transaction } from 'src/app/interfaces/transaction';
import { User } from 'src/app/interfaces/user';
import { TransactionService } from 'src/app/services/transaction.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-transaction',
  templateUrl: './user-transaction.component.html',
  styleUrls: ['./user-transaction.component.scss']
})
export class UserTransactionComponent implements OnInit {

  constructor(private userService: UsersService, private transactionService: TransactionService) { }

  searchUser = new FormGroup({
    name: new FormControl('', []),
  })


  getUserName() {
    console.log(this.searchUser.value['name']);
  }


  usersNames: Array<string> = []

  usersTest: User[];

  ngOnInit(): void {
    this.userService.getUsers().subscribe( (users: User[]) => this.usersTest = users.slice(0, 5)  )  }


  nameMatch = []

  menuSelect() {

    let inputText = this.searchUser.value['name'].trim();
    this.nameMatch = []

    this.userService.getUsers().subscribe((users: User[]) => {
      users.forEach(u => {
        if (u.name.trim().includes(inputText) && inputText.length > 2) {
          this.nameMatch.push({name: u.name, id: u.id });
        }
      })
      this.nameMatch = [ ...new Set(this.nameMatch) ];  //filter duplicates
      debounceTime(500);
    })
  }

  userSelected: User;
  userTransactions: Transaction;
  selectUser(id:string){

    let user$ = this.userService.getUserData(id); //Conseguir datos de un usuario

    const result = user$.pipe(mergeMap(user =>  this.transactionService.getTransacctions(user.relTransaction).pipe( t => t) )) //Conseguir transaccion del Usuario

    result.subscribe(x => this.userTransactions = x)

  }


}
