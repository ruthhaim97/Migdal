import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { inProcess } from './contact';

@Injectable({
  providedIn: 'root'
})
export class Service {

  public process = inProcess;

  constructor() { }

  checkIfParticipatingClaim(claim:any) {
    return claim.find(claim.coverages, function (coverage:any) { return coverage.claimParticipating; });
}


// PUBLIC API
service = {
    isParticipatingClaim: this.checkIfParticipatingClaim
};
}
