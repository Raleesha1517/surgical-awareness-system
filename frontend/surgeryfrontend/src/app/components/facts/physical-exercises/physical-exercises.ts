import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-physical-exercises',
  imports: [TranslatePipe, RouterLink, RouterLink],
  templateUrl: './physical-exercises.html',
  styleUrl: './physical-exercises.scss',
})
export class PhysicalExercises {
constructor(private translate: TranslateService) {}

  changeLang(lang: string) {
    this.translate.use(lang); // 🔥 real-time change
  }
}
