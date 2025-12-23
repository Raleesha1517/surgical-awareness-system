import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
isCollapsed = false;

  constructor(private translate: TranslateService) {}

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  closeCollapse() {
    this.isCollapsed = false; // closes menu when a link is clicked
  }

  changeLang(lang: string) {
    this.translate.use(lang); // 🔥 real-time change
  }
}
