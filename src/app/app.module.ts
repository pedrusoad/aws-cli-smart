import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule  } from '@angular/common/http';
import { HomeComponent } from './modules/home/home.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OffcanvasComponent } from './components/offcanvas/offcanvas.component';
import { ServicePageComponent } from './modules/service-page/service-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OffcanvasComponent,
    ServicePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxJsonViewerModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }