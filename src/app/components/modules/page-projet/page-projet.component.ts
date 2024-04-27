import { Component, ViewChildren, ElementRef, AfterViewInit, QueryList } from '@angular/core';
import card from '../projet-site/cardProjet.json'
@Component({
  selector: 'app-page-projet',
  templateUrl: './page-projet.component.html',
  styleUrl: './page-projet.component.scss'
})
export class PageProjetComponent {
  cardListe: { nomProjet: string, date: string, descriptionProjet: string, explicationTecno: string, videoFond: string, backgroundColor: string, colortexte: string, textHeader: string , image1: string, DescriptionProjet: string, Objectifs: string, TechnologiesUtilisees: string, FonctionnalitePrincipales: string, Rolesetresponsabilites: string, ResultatsObtenus: string}[] = card;

  constructor() { }

  ngOnInit(): void {
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
}
