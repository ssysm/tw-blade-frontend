import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './views/pages/views/home/home.component';
import {TrackerComponent} from './views/pages/views/pages/tracker/tracker.component';
import {TagComponent} from './views/pages/views/pages/tag/tag.component';
import {LogComponent} from './views/pages/views/pages/log/log.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tracker',
    component: TrackerComponent
  },
  {
    path: 'tag',
    component: TagComponent
  },
  {
    path: 'log',
    component: LogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
