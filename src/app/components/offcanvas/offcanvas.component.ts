import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { awsServices } from '@app/services/aws-services';
import { Router } from '@angular/router';



@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss']
})
export class OffcanvasComponent implements OnInit, OnDestroy {
  private subscriptions: Array<Subscription> = [];

  public aws_services: any;

  constructor(
    private router: Router
  ) {
    this.aws_services = awsServices;
    console.log(awsServices)
  }

  public serviceNavigate(alias: string) {
    this.router.navigate([`/service/${alias}`]);
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(((subscription: Subscription) => subscription.unsubscribe()))
  }
}