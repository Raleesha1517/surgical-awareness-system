import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-instructions',
  imports: [TranslatePipe, RouterLink, RouterLinkActive],
  templateUrl: './instructions.html',
  styleUrl: './instructions.scss',
})
export class Instructions {
constructor(private translate: TranslateService) {}

  changeLang(lang: string) {
    this.translate.use(lang); // 🔥 real-time change
  }
}
