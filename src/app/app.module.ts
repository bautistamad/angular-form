import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { UrlsListComponent } from './components/urls-list/urls-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LinkService } from './services/link.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UrlsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LinkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
