import { Component, OnInit } from '@angular/core';
import experiences from './experience.json';
import badges from '../badge/data.json';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  experienceListe = experiences;
  badges = badges;

  constructor() {}

  ngOnInit(): void {}
}