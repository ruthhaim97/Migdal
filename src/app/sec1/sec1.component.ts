import { Component, OnInit } from '@angular/core';
import { Service} from './../service.service'

@Component({
  selector: 'app-sec1',
  templateUrl: './sec1.component.html',
  styleUrls: ['./sec1.component.css']
})
export class Sec1Component implements OnInit {

  constructor(private service:Service) { }

  inProcess = this.service.process;

  ngOnInit(): void {
  }

  hasIrragularMark() {
    return this.inProcess && this.inProcess.superClaim && this.inProcess.superClaim.irregularSuperClaimFlag === true;
  }

  claimRemarks() {
    var text = "";
    if (this.inProcess.superClaim && this.inProcess.superClaim.inquiryPorcessFlag) {
      text += "בירור";
      if (this.inProcess.superClaim.pensionFollowUpForInsuredType) {
        text += ", ";
      }
    }
    return text;
  }

  getClaims() {
    if (!this.inProcess.superClaim || !this.inProcess.superClaim.operativeClaims) { return ''; }
                var ParticipatingClaims = this.getParticipatingClaims(this.inProcess.superClaim.operativeClaims)
                return ParticipatingClaims ? ParticipatingClaims.map(function (claim:any) {
                    return claim.company + "-" + claim.operativeClaimNum;
                }).join(",") : "אין תביעות משתתפות";
  }


  getParticipatingClaims(operativeClaims:any) {
    return operativeClaims.filter(function (claim:any) {
        return claim.claimStatus.code !== 2;
    })
}

executeRefresh() {
  this.inProcess.superClaim.irregularSuperClaimFlag = true;
  this.inProcess.superClaim.inquiryPorcessFlag = false;
}

}