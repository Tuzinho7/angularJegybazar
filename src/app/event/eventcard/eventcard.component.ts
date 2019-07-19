import { Component, OnInit, Input } from '@angular/core';
import { EventModel } from '../../shared/event-model';

@Component({
  selector: 'app-eventcard',
  templateUrl: './eventcard.component.html',
  styleUrls: ['./eventcard.component.css']
})
export class EventcardComponent implements OnInit {
  @Input() esemeny: EventModel;

  constructor() {}

  ngOnInit() {
    console.log(this.esemeny);
  }
}
