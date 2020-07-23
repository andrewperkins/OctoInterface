import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <mat-grid-list cols="1" rowHeight=100vh>
      <mat-grid-tile>
      <a mat-flat-button routerLink="/files" class="button">Files</a>
      </mat-grid-tile>
    </mat-grid-list>
  `,
  styles: [`

    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
