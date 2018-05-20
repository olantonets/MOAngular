import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomerValidators } from '../customer-validators';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-symplex-method',
  templateUrl: './symplex-method.component.html',
  styleUrls: ['./symplex-method.component.css']
})
export class SymplexMethodComponent implements OnInit {

  symplexParamForm: FormGroup = this.fb.group({
    varNumber: ['', [Validators.max(7), Validators.required, CustomerValidators.positiveNumberValidation]],
    rowNumber: ['', [Validators.max(15), Validators.required, CustomerValidators.positiveNumberValidation]],
  });

  isParamSaved = false;
  cols: number;
  rows: number;
  optimFunction: Array<number>;
  isMax: boolean;
  table: Array<Array<number>> = [];
  b: Array<number>;
  sign: Array<number>;
  constructor(private fb: FormBuilder, public backendService: BackendService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.rows = this.symplexParamForm.get('rowNumber').value;
    this.cols = this.symplexParamForm.get('varNumber').value;
    this.optimFunction = [];

    for (let i = 0; i < this.cols; i++) {
      this.optimFunction.push(0);
    }

    for (let i = 0; i < this.rows; i++) {
      this.table.push([]);
      for (let j = 0; j < this.cols; j++) {
        this.table[i].push(0);
      }
    }

    console.log(this.table);
    this.b = new Array<number>(this.rows);
    this.sign = new Array<number>(this.rows);
    this.isParamSaved = true;
  }

  validate() {
    // ToDo validation
    this.backendService.solveSymplexAll(this.table, this.b, this.sign, this.isMax, this.optimFunction).subscribe(res => {
      console.log(res);
    });
  }

}
