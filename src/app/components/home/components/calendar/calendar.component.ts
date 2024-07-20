import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    FullCalendarModule
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  // Properties
  protected calendarOptions : CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [
      dayGridPlugin,
      listPlugin,
      interactionPlugin
    ],
    dateClick: (arg) => this.handleDateClick(arg),
    events: [
      {
        title: 'Meeting',
        start: '2024-07-20T14:30:00',
        extendedProps: {
          status: 'done'
        }
      },
      {
        title: 'Birthday Party',
        start: '2024-07-21T07:00:00',
        backgroundColor: '#d1000a',
        borderColor: '#d1000a'
      }
    ],
    headerToolbar: {
      end:'dayGridMonth,listWeek prev,next'
    }
  }

  // Observables

  // Constructor

  // Methods
  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr)
  }
}
