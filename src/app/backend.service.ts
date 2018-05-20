import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class BackendService {

  optimisationURL = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  public solveSymplexAll(table, b, sign, isMax, optimFunction) {
    let body = {
      table: table,
      b: b,
      sign: sign,
      isMax: isMax,
      optimFunction: optimFunction
    };

    return this.http.post(`${this.optimisationURL}/symplex-all`, body)
    .map(this.extractData)
    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
