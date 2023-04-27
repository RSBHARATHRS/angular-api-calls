import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUser } from '../models/response.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  subject = new Subject();

  constructor(private http: HttpClient) { }

  getUserList() {
    let params = new HttpParams().set("page", "2")
    return this.http.get<any>("https://reqres.in/api/users", { params: params });
  }

  getUserOfId(id: number) {
    let url = "https://reqres.in/api/users" + id;
    return this.http.get<any>(url);
  }

  createUser() {
    let url = "https://reqres.in/api/users";
    let body = {
      "name": "morpheus",
      "job": "leader"
    }
    return this.http.post<CreateUser>(url, body)
  }
}
