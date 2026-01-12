import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-well-being',
  imports: [TranslatePipe, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './well-being.html',
  styleUrl: './well-being.scss',
})
export class WellBeing {
constructor(private translate: TranslateService) {}

  changeLang(lang: string) {
    this.translate.use(lang); // 🔥 real-time change
  }
}
