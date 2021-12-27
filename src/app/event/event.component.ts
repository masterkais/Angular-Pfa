import { APP_ID, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { event } from 'src/models/event.model';
import { EventService } from 'src/services/event.service';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  popular: event[] = [];
  constructor(public Api:EventService) { }

  
  ngOnInit(): void {
    
    this.Api.getpopular().subscribe(data =>this.popular=data);
    console.log(this.popular);

  }

}


