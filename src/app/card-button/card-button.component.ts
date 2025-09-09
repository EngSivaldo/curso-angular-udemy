import { Component } from '@angular/core';

@Component({
  selector: 'app-card-button', // nome da tag que você vai usar no HTML <app-card-button>

  // Aqui usamos `template` em vez de `templateUrl`.
  // Você pode escrever o HTML direto como string.
  // Se for curto: usar aspas simples em uma linha só.
  // Se for mais longo: usar crase (`) para permitir várias linhas.
  template: `
    <div class="card-button">
      <!-- Esse conteúdo é escrito direto no TS -->
      <button>Adquirir</button>
    </div>
  `,

  // Sempre usar `styleUrls` (plural) em array
  styleUrls: ['./card-button.component.scss'],
})
export class CardButtonComponent {
  // Aqui você pode criar propriedades e métodos
  // que podem ser usados no template acima com {{ }}
}
