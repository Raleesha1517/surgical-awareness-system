import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Instructions } from './components/instructions/instructions';
import { Need } from './components/facts/need/need';

export const routes: Routes = [
        { path: '', component: Home },
        { path: 'instructions', component: Instructions },
        { path: 'need', component: Need },
];
