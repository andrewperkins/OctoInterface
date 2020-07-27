import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  template: `
    <mat-toolbar>
      <span><a routerLink="/" class="octointerface">OctoInterface</a></span>
      <span class="example-spacer"></span>
      <span>Status: Connected</span>
    </mat-toolbar>
  `,
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
