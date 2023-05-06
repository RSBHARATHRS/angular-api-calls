import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  data: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe((res) => {
      console.log(res, "data");
      this.data = res;
    }, (err) => {
      console.log(err, "error")
    });

    this.apiService.createUser().subscribe({
      next: (res) => {
        console.log(res, "data")
      },
      error: () => {
        // alert("error");
      },
      complete: () => { }
    })
  }

  trggerSub() {

  }

  ngOnDestroy(): void {
    // this.obs$?.unsubscribe();
  }

}
