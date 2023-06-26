import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <form>
        <button class="primary" type="button">Outra Tela</button>
      </form>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
