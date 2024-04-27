import { Component } from '@angular/core';
import  {BadgeComponent} from '../badge/badge.component'
@Component({
  selector: 'app-according',
  templateUrl: './according.component.html',
  styleUrl: './according.component.scss'
})
export class AccordingComponent {
  accordionContents = [
    { title: 'Découvrez qui je suis', description: "Passionné par l'informatique et les défis qu'elle implique, je suis quelqu'un de dévoué. Mes compétences en relations humaines et en communication, combinées à ma formation, me permettent d'apporter une contribution appréciable à votre entreprise." },
    { title: 'Les outils et language que je maitrise', description: '' },
    { title: 'Mes experiences', description: '' }
];



currentIndex!: number;

toggleAccordion(index: number) {
    if (this.currentIndex === index) {
        this.currentIndex = -1;
    } else {
        this.currentIndex = index;
    }
}
}
