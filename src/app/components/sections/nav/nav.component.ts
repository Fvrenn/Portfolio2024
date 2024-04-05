import { Component, HostListener } from '@angular/core';
import { ThemeService } from '../../../services/theme/theme.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  constructor(private themeService: ThemeService) { }
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
  ngOnInit(): void {
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) {
      header?.classList.add('scroll-header');
    } else {
      header?.classList.remove('scroll-header');
    }
  }

  toggleTheme(): void {
    this.themeService.toggleDarkTheme();
  }
}