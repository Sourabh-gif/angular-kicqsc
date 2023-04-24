import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import moment from 'moment';
import { DateTime } from 'luxon';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
      <div class="container">
       <div class="row">
        <div class="col-md-4">
        <p>{{utcDate}}</p>
        <p>{{time}}</p>
        <p>{{onlyFormat}}</p>
        <h2>Value of example</h2>
        <p>{{valueofExample}}</p>
        <p>{{GMTtoday}}</p>
        <p>{{getutctime}}</p>
          <p>{{getTime}}</p> <!--its used for time to convert into milisecond-->
          <p>{{getluxonTime}}</p>
        </div>
       </div>
      </div>
  `,
})
export class App implements OnInit {
  name = 'Angular';
  today;
  GMTtoday;
  utcDate;
  getTime;
  time;
  onlyFormat;
  getluxonTime;
  getutctime;
  valueofExample;
  momentisSame;

  ngOnInit() {
    this.today = new Date();
    this.GMTtoday = moment.utc(this.today).format();
    this.utcDate = this.today.toUTCString();
    this.getTime = moment().toDate().getTime();
    this.onlyFormat = moment(this.today).format();
    this.valueofExample = moment(this.today).valueOf()

    // luxon uses
    this.getluxonTime = DateTime.now().toUnixInteger();
    this.getutctime = DateTime.utc().toISO()
    this.momentisSame = moment()

  }

  onDemand() {}
}

bootstrapApplication(App);
