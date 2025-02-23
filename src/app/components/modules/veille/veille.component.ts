import { Component } from '@angular/core';
import card from './cardVeille.json'

@Component({
  selector: 'app-veille',
  templateUrl: './veille.component.html',
  styleUrl: './veille.component.scss'
})
export class VeilleComponent {
  cardListe: { nomVeille: string, paraVeille: string, dateVeille: string, imageVeille: string,  backgroundColor: string, colortexte: string}[] = card;

}
