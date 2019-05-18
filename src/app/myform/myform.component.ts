import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss']
})
export class MyformComponent implements OnInit {

  name = new FormControl();
  age = new FormControl();
  address = new FormControl();
  gender = new FormControl();


  constructor() { }

  ngOnInit() {
  }

}
