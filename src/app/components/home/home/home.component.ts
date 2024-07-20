import { Component } from '@angular/core';
import { CalendarComponent } from '../components/calendar/calendar.component';
import { NotificationsComponent } from '../components/notifications/notifications.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CalendarComponent
    , NotificationsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
