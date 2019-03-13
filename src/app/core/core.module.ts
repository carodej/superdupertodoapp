import { AuthRoutingModule } from './../auth/auth-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth/auth.service';
import { DataService } from '../shared/data.service';
import { TodoService } from '../todo-list/todo.service';

@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  imports: [CommonModule, AuthRoutingModule],
  exports: [HeaderComponent],
  providers: [AuthService, DataService, TodoService]
})
export class CoreModule {}
