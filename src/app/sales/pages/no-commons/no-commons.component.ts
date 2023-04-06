import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [],
})
export class NoCommonsComponent {
  //i18nSelect
  name: string = 'dane';
  gender: string = 'female';

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  //i18nPlural
  clients: string[] = [
    'Pablo',
    'Pedro',
    'Maria',
    'Ramona',
    'Juliana',
    'Arturo',
  ];
  restClients: string[] = [];

  clientMap = {
    '=0': 'no tenemos ningún cliente',
    '=1': 'tenemos un cliente',
    other: 'tenemos # clientes',
  };

  changeName() {
    if (this.name == 'dane') {
      this.name = 'yoel';
      this.gender = 'male';
    } else {
      this.name = 'dane';
      this.gender = 'female';
    }
  }

  deletePerson() {
    if (this.clients.length > 0) {
      let client: any = this.clients.pop();
      this.restClients.push(client);
    } else {
      this.clients = this.restClients;
      this.restClients = [];
    }
  }

  //KeyValue
  person = {
    name: 'Yoel',
    age: 37,
    address: 'Matanzas',
  };

  //JSON
  heroes = [
    { name: 'Superman', fly: true },
    { name: 'Robin', fly: false },
    { name: 'Aquaman', fly: false },
    { name: 'Batman', fly: true },
  ];

  //Async
  myObservable = interval(1000);

  myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('we have some data of promise');
    }, 5000);
  });
  
}
