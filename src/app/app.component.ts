import { Component, OnInit } from '@angular/core';

import { ClaimStatus } from './claim-tracking/models/claim-status';
import { ClaimStatusService } from './claim-tracking/services/claim-status.service';
import { ClaimStatusStore } from './claim-tracking/store/claim-status.store';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ProgressTrackerComponent } from '../components/progress-tracker/progress-tracker.component';
import { provideComponentStore } from '@ngrx/component-store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProgressTrackerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [provideComponentStore(ClaimStatusStore), ClaimStatusService],
})
export class AppComponent implements OnInit {

  title = 'progress-stepper';
  claimStatus$!: Observable<ClaimStatus[]>;

  constructor(private store: ClaimStatusStore) { }

  ngOnInit(): void {
    this.claimStatus$ = this.store.claimStatus$;
    this.store.loadClaimStatus();
  }


}
