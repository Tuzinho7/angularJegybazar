import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertModule, CollapseModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FooterComponent } from './footer/footer.component';
import { EventcardComponent } from './event/eventcard/eventcard.component';
import { EventComponent } from './event/event.component';
import { AppRoutingModule } from './app-routing-module'
import { EventService } from './shared/event.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    FooterComponent,
    EventcardComponent,
    EventComponent,
    ...AppRoutingModule.routableComponenets
  ],
  imports: [
    BrowserModule,
    CollapseModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
