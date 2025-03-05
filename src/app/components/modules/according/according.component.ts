import { Component, Renderer2 } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'app-according',
  templateUrl: './according.component.html',
  styleUrl: './according.component.scss'
})
export class AccordingComponent {
  accordionContents = [
    { title: 'Découvrez qui je suis', description: "Je m’appelle Timothé, j’ai 21 ans et je suis en troisième année de BUT MMI. Passionné par le web et le multimédia, j’ai développé des compétences en développement, design graphique, montage vidéo et modélisation 3D.Après une première expérience en BTS SIO SLAM, j’ai choisi le BUT MMI pour son approche polyvalente et créative. Aujourd’hui, je continue d’explorer et de perfectionner mes compétences pour concevoir des projets alliant technique et esthétique." },
    { title: 'Les outils et language que je maitrise', description: '' },
    { title: 'Mes experiences', description: '' }
  ];

  currentIndex!: number;

  constructor(private renderer: Renderer2) {}

  toggleAccordion(index: number) {
    if (this.currentIndex === index) {
      this.currentIndex = -1;
      this.resetAccordionWidth();
      this.resetPhotoContainerDisplay();
    } else {
      this.currentIndex = index;
      
      if (index === 2) {
        const accordionElements = document.querySelectorAll('.accordion');
        accordionElements.forEach(accordion => {
          this.renderer.setStyle(accordion, 'max-width', '100%');
          this.renderer.setStyle(accordion, 'width', '100%');
        });
        const photoContainers = document.querySelectorAll('.photo-container');
        photoContainers.forEach(container => {
          this.renderer.setStyle(container, 'display', 'none');
        });
      } else {
        this.resetAccordionWidth();
        this.resetPhotoContainerDisplay();
      }
    }
  }
  
  private resetAccordionWidth() {
    const accordionElements = document.querySelectorAll('.accordion');
    accordionElements.forEach(accordion => {
      this.renderer.removeStyle(accordion, 'max-width');
      this.renderer.removeStyle(accordion, 'width');
    });
  }
  
  private resetPhotoContainerDisplay() {
    const photoContainers = document.querySelectorAll('.photo-container');
    photoContainers.forEach(container => {
      this.renderer.removeStyle(container, 'display');
    });
  }
}