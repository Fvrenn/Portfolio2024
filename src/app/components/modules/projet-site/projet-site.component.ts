import { Component, ViewChildren, ElementRef, AfterViewInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-projet-site',
  templateUrl: './projet-site.component.html',
  styleUrls: ['./projet-site.component.scss']
})
export class ProjetSiteComponent implements AfterViewInit {
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
  
}