import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';

import { PictureList } from './picture-list-interface';

@Injectable()
export class GetPicturesService {

  configUrl = 'assets/pictures-config.json';

  /*
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  */

  constructor(
    private http: Http,
  ) {  }

  deletePicture (id: number): Observable<{}> {
    const url = `${this.configUrl}/${id}`;
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  savePicture (pictureItem: PictureList): Observable<PictureList> {
    return this.http.post(this.configUrl, pictureItem)
      .pipe(
        catchError(this.handleError)
      );
  }

  getPictureList (): Observable<PictureList[]> {
    return this.http.get(this.configUrl)
      .pipe(
        catchError(this.handleError)
      )
      .map(this.extractListData);
  }

  private extractListData(res: Response) {
    const body = res.json();
    return body || [];
  }

  private handleError(error: HttpErrorResponse) {
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
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  }
}
