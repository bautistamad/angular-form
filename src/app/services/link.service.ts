import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IUrl } from '../models/i-url';


// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class LinkService {

  private _url!: IUrl;
  private _subject = new Subject<IUrl>();


  constructor() { }

  getObservable(): Observable<IUrl> {
    return this._subject.asObservable();
  }

  addUrl(url: IUrl): void {
    this._url = url;
    this._subject.next(url);
  }

  getCurrentURL(): IUrl {
    return this._url;
  }
}
