import { Component } from '@angular/core';
import { Http }       from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user = {
    name: '',
    email: ''
  };

  result = {}

  usersList = [];

  constructor(private http: Http) {
    this.listUsers();
  }

  registerUser() {
    this.http.post(
      'https://3000-bfba4571-8d46-46e0-b0bf-4d24f9b9aeea.ws-us1.gitpod.io/users',
      this.user
    )
    .toPromise()
    .then((data) => {
        this.result = data;
    })
  }

  listUsers() {
    this.http.get(
      'https://3000-bfba4571-8d46-46e0-b0bf-4d24f9b9aeea.ws-us1.gitpod.io/users',
    )
    .toPromise()
    .then((data) => {
      this.usersList = data.json();
    })
  }
}
