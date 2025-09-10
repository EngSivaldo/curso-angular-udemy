import { Component } from '@angular/core';

@Component({
  selector: 'app-card-button-cancel',
  templateUrl: './card-button-cancel.component.html',
  // styleUrl: './card-button-cancel.component.scss'
  styles: [
    `
      // Variáveis
      $red: rgb(58, 237, 58);
      $purple-hover: #6d28d9;

      $bg-light: #ffffff;
      $bg-dark: #c89ce8;

      $text-light: #f3f4f6;
      $muted-light: #d1c4e9;

      $shadow-light: 0 6px 20px rgba(0, 0, 0, 0.1);
      $shadow-dark: 0 6px 20px rgba(0, 0, 0, 0.4);

      .card-cancel-button {
        background: $red;
        color: #fff;
        padding: 12px 16px;
        border-radius: 12px;
        cursor: pointer;
        font-weight: bold;
        transition: background 0.2s ease, transform 0.1s ease;

        &:hover {
          background: $purple-hover;
        }

        &:active {
          transform: scale(0.97);
        }
      }
    `,
  ],
})
export class CardButtonCancelComponent {}
