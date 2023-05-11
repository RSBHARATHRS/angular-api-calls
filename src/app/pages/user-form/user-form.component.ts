import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})

export class UserFormComponent implements OnInit {

  userForm: FormGroup<any> = new FormGroup({
    name: new FormControl(''),
    sex: new FormControl(''),
    country: new FormControl(''),
    message: new FormControl(''),
  })

  constructor() {

  }

  ngOnInit(): void {
    
  }

  reset() {
    this.userForm.reset();
  }

  canDeactivate() {
    return !this.userForm.dirty;
  }

}
