import { Component, ViewChildren, ElementRef, AfterViewInit, QueryList } from '@angular/core';
import card from './cardProjet.json'


@Component({
  selector: 'app-projet-site',
  templateUrl: './projet-site.component.html',
  styleUrls: ['./projet-site.component.scss']
})
export class ProjetSiteComponent implements AfterViewInit {
  showGraphique = false;
  activeButton = 'site-web';
  cardListe: { nomProjet: string, date: string, descriptionProjet: string, explicationTecno: string, videoFond: string, backgroundColor: string, colortexte: string, textHeader: string , image1: string, DescriptionProjet: string, Objectifs: string, TechnologiesUtilisees: string, FonctionnalitePrincipales: string, Rolesetresponsabilites: string, ResultatsObtenus: string}[] = card;

  constructor() { }

  ngOnInit(): void {
  }
  goToTop() {
    window.scrollTo(0, 0);
  }
  @ViewChildren('myVideo') myVideos?: QueryList<ElementRef<HTMLVideoElement>>;

  ngAfterViewInit() {
    this.myVideos?.forEach(videoRef => {
      const videoElement = videoRef.nativeElement;

      videoElement.addEventListener('mouseover', () => {
        videoElement.play();
      });

      videoElement.addEventListener('mouseout', () => {
        videoElement.pause();
      });
    });
  }

  playVideo(video: HTMLVideoElement) {
    video.play();
  }

  stopVideo(video: HTMLVideoElement) {
    video.pause();
  }

  showSiteWeb() {
    this.showGraphique = false;
    this.activeButton = 'site-web';
  }

  showCreationGraphique() {
    this.showGraphique = true;
    this.activeButton = 'graphisme';
  }
}