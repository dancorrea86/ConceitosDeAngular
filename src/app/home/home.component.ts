import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <section>
      <form>
        <p>Para mudar de página clique <a routerLink="/details">aqui</a>!</p><br>
        <a routerLink="/details"><button class="primary" type="button">Outra Tela</button></a>
      </form>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
