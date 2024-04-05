import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkThemeSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isDarkTheme$: Observable<boolean> = this.isDarkThemeSubject.asObservable();

  constructor() { }

  toggleDarkTheme(): void {
    const newThemeState = !this.isDarkThemeSubject.value;
    this.isDarkThemeSubject.next(newThemeState);
    this.updateBodyTheme(newThemeState);
  }

  private updateBodyTheme(isDark: boolean): void {
    if (isDark) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}