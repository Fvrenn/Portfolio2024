import { Component, OnInit } from '@angular/core';
import badges from './data.json'
@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent implements OnInit {
  badgeListe: { backgroundColor: string, logoPath: string }[] = badges;

  constructor() { }

  ngOnInit(): void {
  }
}