import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FilmsService {

  private API: string = "http://localhost:3000/Films";

  constructor(private _Http: HttpClient) { }

  getAllFilms(): Observable<any>{
    return this._Http.get(this.API)
  }

  handlerError(err){
    if(err.error instanceof Error){
      console.log("client send erro: " + err.Error.message);
    } else {
      console.log(`Serve send error: ${err.status}`)
    }
  }
}
