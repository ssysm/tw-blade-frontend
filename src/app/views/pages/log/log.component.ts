import {Component, OnInit, ViewChild} from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { BaseChartDirective, Label } from 'ng2-charts';
import {LogService} from '../../../providers/log.service';
import {DatePipe} from '@angular/common';
declare var M: any;

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  @ViewChild(BaseChartDirective, { static: true })  chart: BaseChartDirective;

  public lineChartData: ChartDataSets[] = [
    { data: [0, 1, 2, 3, 4], label: 'Failed Count' }
  ];
  public lineChartLabels: Label[] = ['now'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    annotation: {
      annotations: [ ],
    },
  };

  private isLogLoaded: boolean;
  private logData: LogInterface.Result[];

  private beforeLogTime: string;
  private afterLogTime: string;
  constructor(
    private logService: LogService,
    private datePipe: DatePipe
  ) {
  }

  ngOnInit(): void {
    this.loadLatestLog();
  };

  private loadChartData = (results: LogInterface.Result[]) => {
    this.lineChartData[0].data = [];
    this.lineChartLabels = [];
    results.map(d => {
      this.lineChartData[0].data.push(d.failedList.length);
      this.lineChartLabels.push(this.datePipe.transform(d.finishedAt, 'yyyy.MM.dd hh:mm'));
    });
    this.chart.update();
  };

  private loadLatestLog = () => {
    this.isLogLoaded = false;
    this.logService.getLatestLog()
      .subscribe(response => {
          this.isLogLoaded = true;
          M.toast({html: 'Log Updated'});
          this.logData = response.result;
          this.loadChartData(response.result);
      });
  };

  private loadRangeLog = () => {
    console.log(this.afterLogTime);
    this.isLogLoaded = false;
    const beforeTime = new Date(this.beforeLogTime).valueOf();
    const afterTime = new Date(this.afterLogTime).valueOf();
    this.logService.getRangeOfLog('' + beforeTime, '' + afterTime)
      .subscribe(response => {
        this.isLogLoaded = true;
        M.toast({html: 'Log Updated'});
        this.logData = response.result;
        this.loadChartData(response.result);
      })
  };

}
