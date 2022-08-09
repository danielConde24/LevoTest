import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  isUserLoggedIn(): boolean{
    let token = window.localStorage.getItem('TOKEN');
    return typeof(token) !== 'undefined' && token !== null && token !== '';
  }

  onLogOut(): void{
    window.localStorage.removeItem('TOKEN');
    this.router.navigate(['fqa']);
  }
}
