import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TrackerService} from '../../../providers/tracker.service';
import {LookupService} from '../../../providers/lookup.service';
declare var M: any;

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {
  @ViewChild('autocompleteInput', { static: true }) autocompleteEl: ElementRef;
  @ViewChild('collapsible', { static: true }) collapsibleEl: ElementRef;

  private trackerList: Array<TrackerInterface.Result>;
  private page: number;
  private limit: number;
  private trackerListLoaded: boolean;
  private locaterID: string;
  private autocomplete: any;
  private leSortDirection: boolean;
  readonly autoData: object;
  // Forms
  private userId: number;
  private username: string;
  private remark: string;
  private isLookupInfoLoaded: boolean;
  private lookupInfo: LookupInterface.Result;
  constructor(
    private trackerService: TrackerService,
    private lookupService: LookupService
  ) {
    this.page = 0;
    this.limit = 0;
    this.trackerListLoaded = false;
    this.locaterID = 'N/A';
    this.autoData = {};
    this.autocomplete = null;
    this.leSortDirection = false;
  }

  ngOnInit() {
    this.loadTrackers();
    this.autocomplete = M.Autocomplete.init(this.autocompleteEl.nativeElement, {
      onAutocomplete: () => {
        const el = document.getElementById(this.autocompleteEl.nativeElement.value);
        el.scrollIntoView({ behavior: 'smooth' });
      },
      data: this.autoData
    });
    M.Collapsible.init(this.collapsibleEl.nativeElement, {});
  };

  public loadTrackers = () => {
    this.trackerService.getAllTracker(this.page, this.limit)
      .subscribe(response => {
        this.trackerList = response.result;
        this.trackerListLoaded = true;
        M.toast({html: 'Tracker Loaded'});
        this.trackerList.map(d => {
          const { displayName } = d;
          this.autoData[displayName] = null;
        });
        this.autocomplete.updateData(this.autoData);
      }, error1 => {
        M.toast({html: 'Fail to load Tracker'});
      });
  };

  public sortByDate = () => {
    this.leSortDirection = !this.leSortDirection;
    if (!this.leSortDirection) {
      this.trackerList.sort((a, b) => {
        // @ts-ignore
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
    } else {
      this.trackerList.sort((a, b) => {
        // @ts-ignore
        return new Date(a.createdAt) - new Date(b.createdAt);
      });
    }
  };

  public lookupTracker = () => {
    this.lookupService.lookupByDisplayName(this.username)
      .subscribe(response => {
        if (response.result) {
          this.lookupInfo = response.result;
          this.userId = parseInt(this.lookupInfo.id, 10);
          this.isLookupInfoLoaded = true;
        } else {
          M.toast({html: 'Fail to load tracker info'});
        }
      });
  };

  public addTracker = () => {
    this.trackerService.createNewTracker(this.userId, this.username, this.remark)
      .subscribe(response => {
        if (!response.error) {
          M.toast({html: 'Tracker Successfully added'});
          this.username = null;
          this.userId = null;
          this.remark = null;
          this.isLookupInfoLoaded = false;
          this.loadTrackers();
        }
      }, error1 => {
        M.toast({html: 'Fail to load tracker, tracker might be already existed.'});
      });
  };


  public deleteTracker = (uid: number) => {
    this.trackerService.deleteTracker(uid)
      .subscribe(response => {
        this.loadTrackers();
        M.toast({html: 'Tracker Successfully deleted'});
      }, error1 => {
        M.toast({html: 'Fail to delete tracker, tracker might be already deleted.'});
      });
  }

}
