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
import { AppStrings } from '../constants/appstrings.model';
import { BhajanListComponent } from '../components/categories/bhajans/bhajan-list/bhajan-list.component';
import { BhajansComponent } from '../components/categories/bhajans/bhajans.component';
import { Jyortilingas12Component } from '../components/categories/jyortilingas12/jyortilingas12.component';
import { Jyortilingsas12ListComponent } from '../components/categories/jyortilingas12/jyortilingsas12-list/jyortilingsas12-list.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: AppStrings.Home,
        pathMatch: 'full'
    },
    {
        path: AppStrings.HomeLower,
        redirectTo: AppStrings.Home,
        pathMatch: 'full'
    },
    {
        path: AppStrings.Home,
        component: HomeComponent
    },
    {
        path: AppStrings.Stuties,
        component: StutieListComponent
    },
    {
        path: AppStrings.StutieItemRoute,
        component: StutiesComponent,
    },

    {
        path: AppStrings.Mantras,
        component: MantraListComponent
    },
    {
        path: AppStrings.MantraItemRoute,
        component: MantrasComponent
    },

    {
        path: AppStrings.Jyortilingas12,
        component: Jyortilingsas12ListComponent
    },
    {
        path: AppStrings.JyortilingaItemRoute,
        component: Jyortilingas12Component
    },

    {
        path: AppStrings.Bhajans,
        component: BhajanListComponent
    },
    {
        path: AppStrings.BhajanItemRoute,
        component: BhajansComponent
    },


    {
        path: AppStrings.ShivNames108Route,
        component: Names108Component
    },
    {
        path: AppStrings.ShivNames1000Route,
        component: Names1000Component
    },

    {
        path: AppStrings.ShivChalisaRoute,
        component: ShivChalisaComponent
    },

    {
        path: AppStrings.ErrorRoute,
        component: ErrorComponent
    },
];


