import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  template: `
    <div>
    <a routerLink="/" class="octointerface neo-up">OctoInterface</a>
    </div>
    <div>
      <div class="status neo-up">Status: Connected</div>
    </div>
  `,
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
