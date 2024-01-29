import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { StutiesComponent } from '../components/stuties/stuties.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home', 
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'stuties',
        component:StutiesComponent
    },
    {
        path: '**',
        component: HomeComponent
      },
];


