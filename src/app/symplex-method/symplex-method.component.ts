import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomerValidators } from '../customer-validators';

@Component({
  selector: 'app-symplex-method',
  templateUrl: './symplex-method.component.html',
  styleUrls: ['./symplex-method.component.css']
})
export class SymplexMethodComponent implements OnInit {

  symplexForm: FormGroup = this.fb.group({
    varNumber: ['', [Validators.max(7), Validators.required, CustomerValidators.positiveNumberValidation]],
    rowNumber: ['', [Validators.max(15), Validators.required, CustomerValidators.positiveNumberValidation]],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("submit");
  }

}
