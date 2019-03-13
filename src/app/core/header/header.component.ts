import { DataService } from './../../shared/data.service';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService, private dataService: DataService) {}

  ngOnInit() {}

  onAuth() {
    this.authService.authenticate();
  }

  onSaveTodos() {
    this.dataService.saveTodos().subscribe(response => {
      console.log(response);
    });
  }

  onLoadTodos() {
    this.dataService.getTodos();
  }

  loggedIn() {
    return this.authService.isAuthenticated();
  }
}
