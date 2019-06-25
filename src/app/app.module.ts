import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/pages/views/home/home.component';
import { SidenavComponent } from './views/particals/sidenav/sidenav.component';
import { TrackerComponent } from './views/pages/views/pages/tracker/tracker.component';
import { TagComponent } from './views/pages/views/pages/tag/tag.component';
import { StatComponent } from './views/pages/views/pages/stat/stat.component';
import { LogComponent } from './views/pages/views/pages/log/log.component';
import {FormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {HttpClientJsonpModule} from '@angular/common/http';
import {LogService} from './providers/log.service';

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
    HttpClientJsonpModule
  ],
  providers: [
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
