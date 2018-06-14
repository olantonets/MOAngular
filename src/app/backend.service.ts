import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class BackendService {

  //optimisationURL = 'http://localhost:8000';
  optimisationURL = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  public optimizeAll(optFunction, isMax, lb, ub) {
    let body = {
      function: optFunction,
      isMax: isMax,
      lb: lb,
      ub: ub
    };

    return this.http.put(`${this.optimisationURL}/evolution`, body);
    // .map(this.extractData)
    // .catch(this.handleError);
  }

  private extractData(res: Response) {
    debugger;
    let body = JSON.parse(res as string);
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
