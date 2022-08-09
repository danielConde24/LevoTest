
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  constructor(private readonly userService: UserService, private readonly route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(credentials: any): void{
    this.userService.login(credentials).subscribe( res => {
      if(!res || !res.success){
        alert(res.message);
      }
      else{
        document.getElementById('closeBtn')?.click();
        window.localStorage.setItem('TOKEN', res.token);
        this.route.navigate(['administration']);
      }
    });
  }

}
