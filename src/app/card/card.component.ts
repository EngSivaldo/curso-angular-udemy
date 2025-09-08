import { Component } from '@angular/core';

interface IPlano {
  infos?: IInfos; // opcional, para podermos usar ?.
}

interface IInfos {
  tipo: string;
  preco: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  plano: IPlano = {}; // começa vazio (sem infos)

  // Simula carregamento de dados depois (exemplo didático)
  ngOnInit() {
    setTimeout(() => {
      this.plano = {
        infos: {
          tipo: 'Simples',
          preco: 1500,
        },
      };
    }, 2000);
  }
}
