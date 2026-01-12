import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hygeine',
  imports: [TranslatePipe, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './hygeine.html',
  styleUrl: './hygeine.scss',
})
export class Hygeine {
constructor(private translate: TranslateService) {}

  changeLang(lang: string) {
    this.translate.use(lang); // 🔥 real-time change
  }
}
