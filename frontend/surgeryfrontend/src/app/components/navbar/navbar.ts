import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  isCollapsed = false;
  isDropdownOpen = false; // 🔹 for mobile Jump To dropdown

  // 🔥 Ordered content navigation
  steps: string[] = [
    '/content',
    '/need',
    '/breathing',
    '/physical',
    '/diet',
    '/hygeine',
    '/well_being',
    '/other',
    '/after_surgery'
  ];

  currentIndex = -1;

  // Friendly names for dropdown / display
  displayNames: Record<string, string> = {
    '/content': 'Content',
    '/need': 'Why Prehabilitation',
    '/breathing': 'Breathing Exercises',
    '/physical': 'Physical Exercises',
    '/diet': 'Diet',
    '/hygeine': 'Hygiene',
    '/well_being': 'Psychological Well-being',
    '/other': 'Other Medications',
    '/after_surgery': 'After Surgery'
  };

  constructor(
    private translate: TranslateService,
    public router: Router
  ) {
    // Detect route changes and update currentIndex
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentIndex = this.steps.indexOf(event.urlAfterRedirects);
      });
  }

  // 🔁 Navbar collapse logic
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  closeCollapse() {
    this.isCollapsed = false;
    this.isDropdownOpen = false; // close dropdown if open
  }

  // 🌍 Language change
  changeLang(lang: string) {
    this.translate.use(lang);
    this.closeCollapse();
  }

  // ⬅ Previous page
  goPrevious() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.router.navigate([this.steps[this.currentIndex]]);
      this.closeCollapse();
    }
  }

  // ➡ Next page
  goNext() {
    if (this.currentIndex >= 0 && this.currentIndex < this.steps.length - 1) {
      this.currentIndex++;
      this.router.navigate([this.steps[this.currentIndex]]);
      this.closeCollapse();
    }
  }

  // 🔹 Toggle mobile dropdown
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // 🔹 Jump directly to a page from dropdown
  jumpTo(step: string) {
    const index = this.steps.indexOf(step);
    if (index !== -1) {
      this.currentIndex = index;
      this.router.navigate([step]);
      this.isDropdownOpen = false;
      this.closeCollapse();
    }
  }
}
