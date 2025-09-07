import { Component } from '@angular/core';

@Component({
  selector: 'app-card', // seletor usado no HTML (<app-card>)
  templateUrl: './card.component.html', // arquivo HTML do template
  styleUrls: ['./card.component.scss'], // ⚠️ aqui deveria ser "styleUrls" (plural) → senão o Angular não reconhece
})
export class CardComponent {
  plano = {
    infos: {
      tipo: 'Simples',
      preco: 1500,
    },
  };
}
