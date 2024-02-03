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

export const routes: Routes = [
    {
        path: '',
        redirectTo: AppStrings.Home,
        pathMatch: 'full'
    },
    {
        path: AppStrings.Home,
        component: HomeComponent
    },
    {
        path: AppStrings.StutieListRoute,
        component: StutieListComponent
    },
    {
        path: AppStrings.StutieItemRoute,
        component: StutiesComponent,
    },

    {
        path: AppStrings.MantrasListRoute,
        component: MantraListComponent
    },
    {
        path: AppStrings.MantraItemRoute,
        component: MantrasComponent
    },

    {
        path: AppStrings.BhajansListRoute,
        component: BhajanListComponent
    },
    {
        path: AppStrings.BhajanItemRoute,
        component: BhajansComponent
    },


    {
        path: AppStrings.Names108Route,
        component: Names108Component
    },
    {
        path: AppStrings.Names1000Route,
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


