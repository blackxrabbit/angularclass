import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { pipe } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss']
})
export class MyformComponent implements OnInit {

  myform = new FormGroup({
    name: new FormControl(null, Validators.required),
    age: new FormControl(32, [Validators.required, Validators.min(18)]),
    address: new FormControl('Cebu City', Validators.required),
    gender: new FormControl('Male', Validators.required)
  })

  disableBtn = false;

  constructor() { }

  ngOnInit() {

  }

  get formName(){
    return this.myform.get('name')
  }

  get formAge(){
    return this.myform.get('age')
  }


  submitForm(form: FormGroup){
    
    this.disableBtn = true;
  
    let formValue = form.value
    //  http request
    this.myform.reset();
    this.disableBtn = false;
  }

}
