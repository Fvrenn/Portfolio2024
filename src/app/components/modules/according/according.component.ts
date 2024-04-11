import { Component } from '@angular/core';
import  {BadgeComponent} from '../badge/badge.component'
@Component({
  selector: 'app-according',
  templateUrl: './according.component.html',
  styleUrl: './according.component.scss'
})
export class AccordingComponent {
  accordionContents = [
    { title: 'Découvrez qui je suis', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nobis ut perspiciatis minima quidem nisi, obcaecati, delectus consequatur fuga nostrum iusto ipsam ducimus quibusdam possimus. Maiores non enim numquam voluptatem?' },
    { title: 'Mes experiences', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nobis ut perspiciatis minima quidem nisi, obcaecati, delectus consequatur fuga nostrum iusto ipsam ducimus quibusdam possimus. Maiores non enim numquam voluptatem?' },
    { title: 'Les outils et language que je maitrise', description: '' }
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
