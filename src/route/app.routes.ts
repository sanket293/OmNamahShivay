import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { StutiesComponent } from '../components/categories/stuties/stuties.component';
import { StutieListComponent } from '../components/categories/stuties/stutie-list/stutie-list.component';
import { ErrorComponent } from '../components/shared/error/error.component';
import { MantraListComponent } from '../components/categories/mantras/mantra-list/mantra-list.component';
import { MantrasComponent } from '../components/categories/mantras/mantras.component';
import { Names108Component } from '../components/categories/names/names-108/names-108.component';
import { Names1000Component } from '../components/categories/names/names-1000/names-1000.component';
import { ShivChalisaComponent } from '../components/categories/shiv-chalisa/shiv-chalisa.component';
import { StatusComponent } from '../components/categories/status/status.component';

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
        path: 'mantras',
        component: MantraListComponent
    },
    {
        path: 'mantras/:mantraId/:languageId',
        component: MantrasComponent
    },

    {
        path: 'Names_108:languageId',
        component: Names108Component
    },
    {
        path: 'Names_1000/:languageId',
        component: Names1000Component
    },

    {
        path: 'ShivChalisa/:languageId',
        component: ShivChalisaComponent
    },
    
    {
        path: '**',
        component: ErrorComponent
    },
];


