import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="home">
      <a class="button neo-up" routerLink="/files">Files</a>
    </div>
  `,
  styles: [`
      .home {
        display: grid;
        place-items: center;
        height: 100vh;
      }
      .button {
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: 50px;
        padding-right: 50px;
        display: grid;
        place-items: center;
        color: rgb(200, 200, 200);
        text-decoration: none;
        font-size: 2em;
      }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
