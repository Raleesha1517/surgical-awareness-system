import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-breathing-exercises',
  imports: [TranslatePipe, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './breathing-exercises.html',
  styleUrl: './breathing-exercises.scss',
})
export class BreathingExercises {
constructor(private translate: TranslateService) {}

  changeLang(lang: string) {
    this.translate.use(lang); // 🔥 real-time change
  }
}
