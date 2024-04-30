import { Component } from '@angular/core';
import card from '../projet-autre/cardProjetAutre.json'
@Component({
  selector: 'app-page-projet-autre',
  templateUrl: './page-projet-autre.component.html',
  styleUrl: './page-projet-autre.component.scss'
})
export class PageProjetAutreComponent {
  cardListe: { imgfond: string, date: string, techno: string, nomProjet: string , textHeader: string, image1: string, image2: string, DescriptionProjet: string, Objectifs: string, LogicielUtilisees: string }[] = card;

  constructor() { }

  ngOnInit(): void {
  }
}
