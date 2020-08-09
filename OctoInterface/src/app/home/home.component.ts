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
        width: 100px;
        height: 50px;
        display: grid;
        place-items: center;
        color: white;
        text-decoration: none;
      }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
