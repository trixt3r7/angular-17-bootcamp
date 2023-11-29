import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PipesComponent } from './components/docs/pipes/pipes.component';
import { DirectivesComponent } from './components/docs/directives/directives.component';
import { SignalsComponent } from './components/docs/signals/signals.component';
import { SsrComponent } from './components/docs/ssr/ssr.component';
import { DeferComponent } from './components/docs/defer/defer.component';

import { PipesChallengeComponent } from './challenges/components/pipes-challenge/pipes-challenge.component';
import { DirectivesChallengeComponent } from './challenges/components/directives-challenge/directives-challenge.component';

export const routes: Routes = [
    // Angular Docs
    { path: 'defer',        component: DeferComponent },
    { path: 'home',         component: HomeComponent },
    { path: 'directives',   component: DirectivesComponent },
    { path: 'pipes',        component: PipesComponent },
    { path: 'signals',      component: SignalsComponent },
    { path: 'ssr',          component: SsrComponent },

    // Challenges
    { path: 'challenge-pipes', component: PipesChallengeComponent },
    { path: 'challenge-directives', component: DirectivesChallengeComponent },
    
    
    {  path: '', redirectTo: '/home', pathMatch: 'full' }
];
