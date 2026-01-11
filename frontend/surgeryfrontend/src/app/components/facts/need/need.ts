import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-need',
  imports: [TranslatePipe, RouterLink, CommonModule],
  templateUrl: './need.html',
  styleUrl: './need.scss',
})
export class Need {
constructor(private translate: TranslateService) {}

  changeLang(lang: string) {
    this.translate.use(lang); // 🔥 real-time change
}
}