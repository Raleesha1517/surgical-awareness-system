import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import * as AOS from 'aos';
import Swiper from 'swiper';


bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

  AOS.init({
  duration: 1000,
  once: true
});

var swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: { delay: 5000 },
});
