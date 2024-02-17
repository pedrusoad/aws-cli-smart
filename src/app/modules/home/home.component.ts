import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
// import { data } from '@app/classes/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscriptions: Array<Subscription> = [];

  constructor( ) { }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(((subscription: Subscription) => subscription.unsubscribe()))
  }
}