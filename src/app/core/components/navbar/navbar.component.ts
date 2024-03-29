import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   
   show:boolean = true;

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    //console.log(this.notloggedin());
   // this.show = this.authService.userIsLoggedIn() 
  }
  
  //isloggedin(){
    //const token = this.authService.getDecodedToken()
    //return (token === '{}')
  //}
  notloggedin(){
    const token = this.authService.getDecodedToken()
    this.show = token=== '{}'
    return (token === '{}')
  }

}
