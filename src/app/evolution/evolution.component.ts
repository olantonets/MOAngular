import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-evolution',
  templateUrl: './evolution.component.html',
  styleUrls: ['./evolution.component.css']
})
export class EvolutionComponent implements OnInit, OnDestroy {


  inputFunc;
  isMax = true;
  lb;
  ub;

  inSolvingProccess = false;
  isDataReady = false;

  maxOptions = [
    {value: true, viewValue: 'Max'},
    {value: false, viewValue: 'Min'},
  ];

  genAff;
  genCoord;

  immun;

  partAff;
  partCoord;

  constructor(public backendService: BackendService) { }

  ngOnInit() {
    if (localStorage.getItem('inputFunc')) {
      this.inputFunc = localStorage.getItem('inputFunc');
    }

    if (localStorage.getItem('isMax')) {
      this.isMax = localStorage.getItem('isMax') === 'true';
    }

    if (localStorage.getItem('lb')) {
      this.lb = localStorage.getItem('lb');
    }

    if (localStorage.getItem('ub')) {
      this.ub = localStorage.getItem('ub');
    }
  }

  ngOnDestroy() {
    localStorage.setItem('inputFunc', this.inputFunc);
    localStorage.setItem('isMax', this.isMax.toString());
    localStorage.setItem('lb', this.lb);
    localStorage.setItem('ub', this.ub);
  }

  submit() {
    this.isDataReady = false;
    this.inSolvingProccess = true;

    this.backendService.optimizeAll(this.inputFunc, this.isMax, JSON.parse(this.lb), JSON.parse(this.ub)).subscribe( res => {

      this.genAff = res['genetic'][0];
      this.genCoord = res['genetic'][1];

      this.immun = res['imunneSystem'];

      this.partAff = res['partical'][1];
      this.partCoord = res['partical'][0];

      this.isDataReady = true;
      this.inSolvingProccess = false;
    });
  }

}
