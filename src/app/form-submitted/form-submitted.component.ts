import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-form-submitted',
  templateUrl: './form-submitted.component.html',
  styleUrls: ['./form-submitted.component.scss']
})
export class FormSubmittedComponent implements OnInit {

  formValues;

  constructor(
    private ar: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formValues = this.ar.snapshot.queryParams;
    // this.ar.queryParams.subscribe((params: Params) => {
    //   console.log(params)
    //   this.formValues = params;
    // })
  }

}
