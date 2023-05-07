import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent {

  userList: any[] = [];
  data: any;

  constructor(private apiService: ApiService) {
    this.getUserList();
  }

  getUserList() {
    this.data = this.apiService.getUserList()
    .subscribe((res) => {
      this.userList = res?.data;
      console.log(this.userList, "user list");
    })
  }
}
