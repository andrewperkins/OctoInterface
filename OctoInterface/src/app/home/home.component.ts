import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="home">
      <a class="button" routerLink="/files" class="button">Files</a>
    </div>
  `,
  styles: [`
      .home {
        display: grid;
        place-items: center;
        height: 100vh;
      }
      .button {
        background: #2A2D32;
        box-shadow: 10px 10px 15px #24262B, -10px -10px 15px #30343A;
        border-radius: 20px;
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
