import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
cookieExists: boolean = this.cookieService.check('cookieAccepted');
constructor( private cookieService: CookieService ) { 
  console.log(this.cookieExists);

}



 cookie(){
  var date = new Date();
  this.cookieService.set( 'cookieAccepted', date.toString() );
  var cookieCheck: boolean = this.cookieService.check('cookieAccepted');
  this.cookieExists= cookieCheck;
   
}
}