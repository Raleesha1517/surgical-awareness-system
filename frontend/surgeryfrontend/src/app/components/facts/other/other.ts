import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-other',
  imports: [TranslatePipe, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './other.html',
  styleUrl: './other.scss',
})
export class Other {
constructor(private translate: TranslateService) {}

  changeLang(lang: string) {
    this.translate.use(lang); // 🔥 real-time change
  }
}
