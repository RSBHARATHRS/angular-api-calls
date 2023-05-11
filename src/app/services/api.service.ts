import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Post {
  createdAt: string,
  id: string,
  job: string,
  name: string
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  USER_LIST_URL = "https://reqres.in/api/users";
  DOMAIN_URL = "https://reqres.in";

  constructor(private http: HttpClient) { }

  getData() {
    let params = new HttpParams().set("page", "2");
    // let header = new HttpHeaders().set()
    return this.http.get<any>("https://reqres.in/api/users", { params: params });
  }

  createUser() {
    let payload = {
      "name": "morpheus",
      "job": "leader"
    }
    return this.http.post<Post>("https://reqres.in/a", payload);
  }

  //API call to get users list
  getUserList() {
    let userListPath = "/api/users";
    let url = this.DOMAIN_URL + userListPath;
    let params = new HttpParams().set("page", "2");
    return this.http.get<any>(url, { params: params });
  }


}
