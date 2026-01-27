import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-content',
  imports: [RouterLink, RouterLinkActive, TranslatePipe, CommonModule],
  templateUrl: './content.html',
  styleUrl: './content.scss',
})
export class Content {
constructor(private translate: TranslateService) {}

  changeLang(lang: string) {
    this.translate.use(lang); // 🔥 real-time change
  }
}
