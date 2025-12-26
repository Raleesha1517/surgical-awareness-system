import { Component, signal, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']   // <-- fixed typo, was styleUrl
})
export class App{
  protected readonly title = signal('surgeryfrontend');

  showLangPopup = false; // 🔥 controls popup

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang');

    if (savedLang) {
      // If user already selected language before
      this.translate.use(savedLang);
    } else {
      // First time opening app
      this.showLangPopup = true;
    }
  }

  changeLang(lang: string) {
    this.translate.use(lang);           // change language instantly
    localStorage.setItem('lang', lang); // save choice
    this.showLangPopup = false;          // close popup
  }

 
}
