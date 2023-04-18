import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) { }

  data: any[] = []
  ngOnInit(): void {

  }

  // steam() {
  //   this.api.login().subscribe(
  //     (resp) => {
  //       console.log(resp);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   )
  // }
}
