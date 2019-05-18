import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { pipe } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss']
})
export class MyformComponent implements OnInit {

  myform = new FormGroup({
    lastName: new FormControl(null, Validators.required),
    firstName: new FormControl(null, Validators.required),
    fullName: new FormControl({value: null, disabled: true}, Validators.required),
    age: new FormControl(32, [Validators.required, Validators.min(18)]),
    address: new FormControl('Cebu City', Validators.required),
    gender: new FormControl('Male', Validators.required)
  })

  disableBtn = false;

  name;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.myform.valueChanges
    .pipe(debounceTime(300))
    .subscribe(value => {
      if(value.firstName && value.lastName){
        this.myform.get('fullName').setValue(`${value.firstName} ${value.lastName}`)
      }else {
        this.myform.get('fullName').setValue(null)
      }
    })
  }

  newInput(i){
    console.log(i)
  }

  // get formName(){
  //   return this.myform.get('name')
  // }

  get formAge(){
    return this.myform.get('age')
  }


  submitForm(form: FormGroup){
    this.disableBtn = true;
    
    let formValue = form.getRawValue();
    console.log(formValue)
    this.myform.reset();
    this.disableBtn = false;
    //redirect to form-submitted page

    this.router.navigate(['/form-submitted']
    , {queryParams: formValue})

  }

  populateForm(){
    let formData = {
      name: 'Cedric',
      age: 22
    }

    this.myform.patchValue(formData)
  }

}
