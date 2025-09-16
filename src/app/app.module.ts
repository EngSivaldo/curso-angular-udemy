// Importamos o decorator @NgModule para criar o módulo raiz da aplicação
import { NgModule } from '@angular/core';

// Importamos BrowserModule, que é necessário para rodar a aplicação Angular no navegador
import { BrowserModule } from '@angular/platform-browser';

// Importamos o módulo de rotas da aplicação
import { AppRoutingModule } from './app-routing.module';

// Importamos o componente principal da aplicação
import { AppComponent } from './app.component';

// 🔑 Importamos o CardsModule
// Isso permite que todos os componentes exportados pelo CardsModule
// fiquem disponíveis para uso dentro dos templates do AppModule
import { CardsModule } from './cards/cards.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Criamos o módulo raiz da aplicação (AppModule)
// Este módulo é o ponto de entrada da aplicação Angular.
@NgModule({
  // Aqui declaramos apenas o AppComponent, que é o componente principal
  declarations: [AppComponent],

  // Aqui importamos os módulos necessários para o funcionamento da aplicação
  imports: [
    BrowserModule, // necessário para rodar no navegador
    AppRoutingModule, // responsável pelas rotas da aplicação
    CardsModule, // 🔑 agora podemos usar <app-card>, <app-card-button>, etc. no AppComponent e em qualquer outro componente do AppModule
  ],

  // Serviços globais da aplicação podem ser registrados aqui
  providers: [provideAnimationsAsync()],

  // Define qual componente será carregado primeiro ao iniciar a aplicação
  bootstrap: [AppComponent],
})
export class AppModule {}
