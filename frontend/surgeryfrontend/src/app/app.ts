import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Navbar } from "./components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('surgeryfrontend');

  constructor(private translate: TranslateService) {}

  changeLang(lang: string) {
    this.translate.use(lang); // 🔥 real-time change
  }
}
