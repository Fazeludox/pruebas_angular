import { Component } from '@angular/core';
import { User } from './interfaces/user'
import { UsersService } from './services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'MemoryService';
}
