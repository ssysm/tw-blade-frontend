import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './views/pages/home/home.component';
import {TrackerComponent} from './views/pages/tracker/tracker.component';
import {TagComponent} from './views/pages/tag/tag.component';
import {LogComponent} from './views/pages/log/log.component';
import {StatComponent} from './views/pages/stat/stat.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'statistic',
    component: StatComponent
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
