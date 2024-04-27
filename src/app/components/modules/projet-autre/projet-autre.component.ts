import { Component } from '@angular/core';
import card from './cardProjetAutre.json'

@Component({
  selector: 'app-projet-autre',
  templateUrl: './projet-autre.component.html',
  styleUrl: './projet-autre.component.scss'
})
export class ProjetAutreComponent {

  cardListe: { imgfond: string, date: string, techno: string, nomProjet: string , textHeader: string, image1: string, image2: string, DescriptionProjet: string, Objectifs: string, LogicielUtilisees: string }[] = card;

  constructor() { }

  ngOnInit(): void {
  }
}
