// Importamos o decorator @NgModule para criar um módulo Angular
import { NgModule } from '@angular/core';

// Importamos CommonModule, que contém diretivas e funcionalidades básicas do Angular
// como *ngIf e *ngFor (sem ele, esses recursos não funcionariam nos templates).
import { CommonModule } from '@angular/common';

// Importamos os componentes que farão parte deste módulo
import { CardComponent } from '../card/card.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardRoxoButtonComponent } from '../card-roxo-button/card-roxo-button.component';
import { CardButtonCancelComponent } from '../card-button-cancel/card-button-cancel.component';

// Criamos o módulo "CardsModule"
// Esse módulo serve para agrupar e organizar todos os componentes de "cards"
// deixando o código mais modular e reutilizável.
@NgModule({
  // Aqui declaramos os componentes que pertencem a este módulo
  declarations: [
    CardComponent,
    CardButtonComponent,
    CardRoxoComponent,
    CardRoxoButtonComponent,
    CardButtonCancelComponent,
  ],
  // Aqui importamos outros módulos necessários para que os componentes funcionem
  imports: [CommonModule],
  // Aqui exportamos os componentes
  // Isso significa que qualquer outro módulo que importar o CardsModule
  // poderá usar diretamente <app-card>, <app-card-button>, <app-card-roxo>
  // e <app-card-roxo-button> em seus templates.
  exports: [
    CardComponent,
    CardButtonComponent,
    CardRoxoComponent,
    CardRoxoButtonComponent,
  ],
})
// Finalmente, exportamos a classe CardsModule para que ela possa ser usada
// em outros módulos da aplicação.
export class CardsModule {}
