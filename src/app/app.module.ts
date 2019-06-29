import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/pages/home/home.component';
import { SidenavComponent } from './views/particals/sidenav/sidenav.component';
import { TrackerComponent } from './views/pages/tracker/tracker.component';
import { TagComponent } from './views/pages/tag/tag.component';
import { StatComponent } from './views/pages/stat/stat.component';
import { LogComponent } from './views/pages/log/log.component';
import {FormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {LogService} from './providers/log.service';
import {TrackerService} from './providers/tracker.service';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    TrackerComponent,
    TagComponent,
    StatComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    HttpClientJsonpModule,
    HttpClientModule
  ],
  providers: [
    LogService,
    TrackerService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
