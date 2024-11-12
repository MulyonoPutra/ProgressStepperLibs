import { Observable, switchMap, tap } from "rxjs";

import { ClaimStatus } from "../models/claim-status";
import { ClaimStatusService } from "../services/claim-status.service";
import { ComponentStore } from "@ngrx/component-store";
import { Injectable } from "@angular/core";

export interface ClaimStatusState {
  claimStatus: ClaimStatus[];
}


@Injectable()
export class ClaimStatusStore extends ComponentStore<ClaimStatusState> {
  constructor(private claimStatusService: ClaimStatusService) {
    super({ claimStatus: [] });
  }

  // Selector to get claim status data
  readonly claimStatus$ = this.select((state) => state.claimStatus);

  // Updater to set the claim status data
  readonly setClaimStatus = this.updater(
    (state, claimStatus: ClaimStatus[]) => ({
      ...state,
      claimStatus,
    })
  );

  // Effect to load claim status data
  readonly loadClaimStatus = this.effect((trigger$: Observable<void>) =>
    trigger$.pipe(
      switchMap(() => this.claimStatusService.getClaimStatus()),
      tap((claimStatus) => this.setClaimStatus(claimStatus))
    )
  );
}
