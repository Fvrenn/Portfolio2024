import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import card from '../projet-site/cardProjet.json';
import graphisme from '../projet-autre/cardProjetAutre.json';
import badges from '../badge/data.json';

@Component({
  selector: 'app-detail-projet',
  templateUrl: './detail-projet.component.html',
  styleUrl: './detail-projet.component.scss',
})
export class DetailProjetComponent {
  projet: any;
  badges = badges;
  selectedBadges: string[] = [];
  isDetailedView: boolean = false;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const nomProjet = params['nomProjet'];
      this.projet = [...card, ...graphisme].find(
        (p: any) => p.nomProjet === nomProjet
      );
      
      if (this.projet && this.projet.badges) {
        this.selectedBadges = this.projet.badges;
      }
    });
  }

  toggleView(detailed: boolean) {
    this.isDetailedView = detailed;
  }

  splitText(text: string): string[] {
    const middle = Math.floor(text.length / 2);
    const before = text.lastIndexOf(' ', middle);
    const after = text.indexOf(' ', middle);

    let index;
    if (before === -1 || (after !== -1 && middle - before >= after - middle)) {
      index = after;
    } else {
      index = before;
    }

    const part1 = text.substring(0, index);
    const part2 = text.substring(index + 1);
    return [part1, part2];
  }
}
