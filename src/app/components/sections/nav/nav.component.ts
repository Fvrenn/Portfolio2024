import { Component, HostListener } from '@angular/core';
import { ThemeService } from '../../../services/theme/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'] // Utilisation de 'styleUrls' au lieu de 'styleUrl'
})
export class NavComponent {
  constructor(private themeService: ThemeService) { }
  isMenuOpen: boolean = false;
  isDarkTheme: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  ngOnInit(): void {
    this.themeService.isDarkTheme$.subscribe(isDark => {
      this.isDarkTheme = isDark;
    });
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

  // Méthode pour basculer le thème en utilisant le service ThemeService
  toggleTheme(): void {
    this.themeService.toggleDarkTheme();
  }
}
