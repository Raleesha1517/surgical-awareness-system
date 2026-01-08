import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Instructions } from './components/instructions/instructions';

export const routes: Routes = [
        { path: '', component: Home },
        { path: 'instructions', component: Instructions },
];
