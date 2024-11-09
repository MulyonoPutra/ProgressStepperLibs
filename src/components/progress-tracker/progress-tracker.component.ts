import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, type OnInit } from '@angular/core';

interface ProgressTracker {
  progressNo: string;
  progressName: string;
  progressDate: string;
  progressStatus: string;
}

@Component({
  selector: 'app-progress-tracker',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './progress-tracker.component.html',
  styleUrls: ['./progress-tracker.component.scss'],
})
export class ProgressTrackerComponent implements OnInit {

  @Input() progressTrackers!: ProgressTracker[];
  isMobile: boolean = false;

  getCircleClass(progressStatus: string): string {
    switch (progressStatus) {
      case 'done':
        return 'circle-done';
      case 'onprogress':
        return 'circle-progress';
      case 'notStarted':
        return 'circle-pending';
      default:
        return '';
    }
  }

  getStepClass(progressStatus: string): string {
    switch (progressStatus) {
      case 'done':
        return 'done';
      case 'onprogress':
        return 'onprogress';
      case 'notStarted':
        return 'notStarted';
      default:
        return '';
    }
  }

  getLineClass(index: number): string {
    const nextStep = this.progressTrackers[index + 1];

    if (!nextStep) {
      return '';
    }

    switch (nextStep.progressStatus) {
      case 'done':
        return 'line-done';
      case 'onprogress':
        return 'line-progress';
      case 'notStarted':
        return 'line-pending';
      default:
        return '';
    }
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }

}
