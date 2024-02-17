import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { awsServices } from '@app/services/aws-services';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss']
})
export class ServicePageComponent implements OnInit, OnDestroy {
  private subscriptions: Array<Subscription> = [];

  private service_alias: any;
  public carregando: boolean = true;
  public copying: boolean = false;
  public config_service: any;
  public coppying_idx: any = undefined;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  private getAlias() {
    this.ActivatedRoute.params.subscribe(params => {
      this.service_alias = params['alias'];
      console.log('Alias capturado:', this.service_alias);
    });
    this.getConfigService(this.service_alias)
  }

  private getConfigService(alias: string) {
    this.config_service = awsServices.find(x => x.alias === alias);
    if (this.config_service) {
      console.log(this.config_service);
      this.carregando = false;
    } else {
      this.router.navigate([`/service/${alias}`]);
    }
  }

  public copyCmd(cmd: any, i: number) {
    this.coppying_idx = i;
    this.copying = true;
    navigator.clipboard.writeText(cmd);
    setTimeout(() => {
      this.coppying_idx = undefined;
      this.copying = false;
    }, 1500);
  }


  ngOnInit(): void {
    this.getAlias();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(((subscription: Subscription) => subscription.unsubscribe()))
  }
}