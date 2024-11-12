export interface ClaimStatus {
  progressNo: string;
  progressName: string;
  progressDate: string;
  progressStatus: 'done' | 'onprogress' | 'notStarted';
}
