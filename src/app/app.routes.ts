import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PipesComponent } from './components/docs/pipes/pipes.component';
import { DirectivesComponent } from './components/docs/directives/directives.component';
import { SignalsComponent } from './components/docs/signals/signals.component';
import { SsrComponent } from './components/docs/ssr/ssr.component';

export const routes: Routes = [
    {
        path: 'pipes',
        component: PipesComponent
    },
    {
        path: 'directives',
        component: DirectivesComponent
    },
    {
        path: 'signals',
        component: SignalsComponent
    },
    {
        path: 'ssr',
        component: SsrComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    { 
        path: '', 
        redirectTo: '/home', 
        pathMatch: 'full' 
    }
];
