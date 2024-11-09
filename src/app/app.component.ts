import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProgressTrackerComponent } from '../components/progress-tracker/progress-tracker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProgressTrackerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'progress-stepper';

  progressTrackers = [
    { progressNo: '1', progressName: 'Document', progressDate: '12 Jan 2024', progressStatus: 'done' },
    { progressNo: '2', progressName: 'Analysis Process', progressDate: '13 Jan 2024', progressStatus: 'done' },
    { progressNo: '3', progressName: 'Pending', progressDate: '14 Jan 2024', progressStatus: 'onprogress' },
    { progressNo: '4', progressName: 'Result', progressDate: '-', progressStatus: 'onprogress' },
    { progressNo: '5', progressName: 'Paid', progressDate: '-', progressStatus: 'notStarted' }
  ];
}
