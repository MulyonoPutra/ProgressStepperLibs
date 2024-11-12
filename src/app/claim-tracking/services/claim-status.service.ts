import { Observable, of } from 'rxjs';

import { ClaimStatus } from '../models/claim-status';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClaimStatusService {

  private mockData: ClaimStatus[] = [
    {
      progressNo: '1',
      progressName: 'Document',
      progressDate: '12 Jan 2024',
      progressStatus: 'done',
    },
    {
      progressNo: '2',
      progressName: 'Analysis Process',
      progressDate: '13 Jan 2024',
      progressStatus: 'done',
    },
    {
      progressNo: '3',
      progressName: 'Pending',
      progressDate: '13 Jan 2024',
      progressStatus: 'onprogress',
    },
    {
      progressNo: '4',
      progressName: 'Result',
      progressDate: '-',
      progressStatus: 'notStarted',
    },
    {
      progressNo: '5',
      progressName: 'Paid',
      progressDate: '-',
      progressStatus: 'notStarted',
    },
  ];

  constructor() { }

  getClaimStatus(): Observable<ClaimStatus[]> {
    return of(this.mockData);
  }

}
