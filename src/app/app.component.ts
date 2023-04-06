import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // name: string = 'yoel glez';
  // description: string =
  //   'Do commodo nulla cillum proident. Aute eiusmod cupidatat voluptate consequat incididunt fugiat labore. Aute ex do exercitation nostrud irure culpa voluptate occaecat occaecat mollit ad ea ullamco fugiat. Ex Lorem est ut ad id cupidatat do.';
  // occupation: string = 'Official Papachurro';

  // showName() {
  //   console.log(this.name);
  // }

  constructor(private primeNGConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primeNGConfig.ripple = true;
  }
}
