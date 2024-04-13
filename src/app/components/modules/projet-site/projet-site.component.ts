import { Component, ViewChildren, ElementRef, AfterViewInit, QueryList } from '@angular/core';
import card from './cardProjet.json'

@Component({
  selector: 'app-projet-site',
  templateUrl: './projet-site.component.html',
  styleUrls: ['./projet-site.component.scss']
})
export class ProjetSiteComponent implements AfterViewInit {

  cardListe: { nomProjet: string, date: string, descriptionProjet: string, explicationTecno: string, videoFond: string, backgroundColor: string, colortexte: string, }[] = card;

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