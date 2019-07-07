import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {environment} from "../../../environments/environment"
let urlAPI = "";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private HTTP: HttpClient) {
    urlAPI = environment.urlAPI;
   }

  get(url): Observable<any>{
    return this.HTTP.get(urlAPI + url).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }


  private handleError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
