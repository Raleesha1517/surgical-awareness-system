import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Instructions } from './components/instructions/instructions';
import { Need } from './components/facts/need/need';
import { PhysicalExercises } from './components/facts/physical-exercises/physical-exercises';
import { BreathingExercises } from './components/facts/breathing-exercises/breathing-exercises';
import { Diet } from './components/facts/diet/diet';
import { Hygeine } from './components/facts/hygeine/hygeine';
import { WellBeing } from './components/facts/well-being/well-being';
import { Other } from './components/facts/other/other';
import { Content } from './components/facts/content/content';
import { AfterSurgery } from './components/facts/after-surgery/after-surgery';

export const routes: Routes = [
        { path: '', component: Home },
        { path: 'content', component: Content },
        { path: 'instructions', component: Instructions },
        { path: 'need', component: Need },
        { path: 'physical', component: PhysicalExercises },
        { path: 'breathing', component: BreathingExercises },
        { path: 'diet', component: Diet },
        { path: 'hygeine', component: Hygeine },
        { path: 'well_being', component: WellBeing },
        { path: 'other', component: Other },
        { path: 'after_surgery', component: AfterSurgery },
];
