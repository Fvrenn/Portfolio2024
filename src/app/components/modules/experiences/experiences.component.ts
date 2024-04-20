import { Component } from '@angular/core';
import experiences from './experience.json'
@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  experiencesListe: { date: string, roleEntreprise: string, nomEntreprise: string, link: string }[] = experiences;

  constructor() { }

  ngOnInit(): void {
  }
}
