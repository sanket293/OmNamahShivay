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
        path: 'Stuties/:stutiKey/:language',
        component: StutiesComponent,
    },

    {
        path: 'Mantras',
        component: MantraListComponent
    },
    {
        path: 'Mantras/:mantraId/:languageId',
        component: MantrasComponent
    },

    {
        path: 'shivnames108:languageId',
        component: Names108Component
    },
    {
        path: 'names_1000/:languageId',
        component: Names1000Component
    },

    {
        path: 'shivchalisa/:languageId',
        component: ShivChalisaComponent
    },

    {
        path: '**',
        component: ErrorComponent
    },
];


