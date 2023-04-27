import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CreateUser } from 'src/app/models/response.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  data: any;
  sub$!: Subscription;

  constructor(private apiService: ApiService) {

   }

  ngOnInit(): void {

    this.sub$ = this.apiService.subject.subscribe((res)=>{
      console.log(res, "res")
    })

    this.apiService.getUserList().subscribe((res) => {
      this.data = res;
      console.log(res, "res");
    })

    // this.apiService.getUserOfId(2).subscribe((res) => {
    //   console.log(res, "2")
    // }, (err) => {
    //   console.log(err, "2")
    // })

    this.apiService.getUserOfId(2).subscribe({
      next: (res) => {
        console.log(res, "res")
      },
      error: (err) => {
        console.log(err, "err")
      }
    })

    this.apiService.createUser().subscribe((res:CreateUser)=>{
      console.log(res, "create")
    })
  }
  trggerSub() {
    this.apiService.subject.next("Hi")
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub$?.unsubscribe();
  }

}
