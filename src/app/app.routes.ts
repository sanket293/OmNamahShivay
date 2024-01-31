import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { StutiesComponent } from '../components/stuties/stuties.component';
import { StutieListComponent } from '../components/stuties/stutie-list/stutie-list.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'stuties',
        component: StutieListComponent
    },
    {
        path: 'stuties/:stutiId/:languageId',
        component: StutiesComponent
    },
    {
        path: '**',
        component: HomeComponent
    },
];


