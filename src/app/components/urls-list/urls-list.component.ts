import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUrl } from 'src/app/models/i-url';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-urls-list',
  templateUrl: './urls-list.component.html',
  styleUrls: ['./urls-list.component.css']
})
export class UrlsListComponent implements OnInit {

  private _suscription!: Subscription;
  urls: IUrl[] = [];

  constructor(private _service: LinkService) {}

  ngOnInit(): void {
      this._suscription = this._service.getObservable().subscribe((url: IUrl) => {
  
        this.urls.push(url)
        console.log("THIS URL: " + JSON.stringify(url))
        console.log("THIS URLS LIST: " + JSON.stringify(this.urls))
      })
  }

  ngOnDestroy(): void {
    this._suscription.unsubscribe();
  }

  deleteUrls(index: number): void {
    this.urls.splice(index,1);
  }
}
