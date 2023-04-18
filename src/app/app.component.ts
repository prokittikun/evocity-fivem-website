import { Component } from '@angular/core';
import { ApiService } from './service/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fiveMWebFrontend';
  
  constructor(private api: ApiService) { }

  login(){
    window.location.href = "http://localhost:3000/auth/steam";
    this.api.login().subscribe(
      (resp) => {
        console.log(resp);
      },  
      (err) => {
        console.log(err);
      }
    )
  }
}
