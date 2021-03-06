import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nz-demo-alert-closeable',
  template: `
    <nz-alert [nzType]="'warning'" [nzCloseable]="'true'" [nzMessage]="'Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text'" (nzOnClose)="afterClose()">
    </nz-alert>

    <nz-alert [nzType]="'error'" [nzCloseable]="'true'" [nzMessage]="'Error Text'"
      [nzDescription]="'Error Description Error Description Error Description Error Description Error Description Error Description'"
      (nzOnClose)="afterClose()"></nz-alert>
  `
})

export class NzDemoAlertCloseableComponent implements OnInit {
  afterClose() {
    console.log('close');
  }

  constructor() {
  };

  ngOnInit() {
  };
}
