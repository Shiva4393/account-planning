import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  firstname;
  lastname;
  private restAPI = 'https://jsonplaceholder.typicode.com/posts';
  title = 'app';
  constructor(private http: HttpClient) {}

  onSubmit() {
    console.log('firstname: ' + this.firstname);
    console.log('lastname: ' + this.lastname);
    const payload = {firstname : this.firstname, lastname: this.lastname};
    this.http.post(this.restAPI, payload).toPromise().then((response) => {
      console.log(response);
    });
  }

}
