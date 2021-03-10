import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { FakeApiService } from './services/fake-api.service';
import { UsersService } from './services/users.service';

import { UserListModule } from './components/user-list/user-list.module';
import { UserDetailsModule } from './components/user-details/user-details.module';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { PipesModule } from './module/pipes/pipes.module';
import { UserTransactionModule } from './components/user-transaction/user-transaction.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeApiService, { delay: 50 }),
    UserListModule,
    UserDetailsModule,
    ToolbarModule,
    PipesModule,
    UserTransactionModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
