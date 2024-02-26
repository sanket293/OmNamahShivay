import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ErrorComponent } from '../components/shared/error/error.component';
import { AppStrings } from '../constants/appstrings.model';
import { PostComponent } from '../components/post/post.component';
import { ListItemComponent } from '../components/category/show/list-item/list-item.component';
import { AddListItemComponent } from '../components/category/add/add-list-item/add-list-item.component';
import { AddListComponent } from '../components/category/add/add-list/add-list.component';
import { AddItemDisplayComponent } from '../components/category/add/add-item-display/add-item-display.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        redirectTo: AppStrings.RedirectHome,
        pathMatch: 'full'
    },
    // Header n Footer
    {
        path: 'Home',
        component: HomeComponent
    },
    //Posts
    {
        path: 'Post/:postId',
        component: PostComponent
    },
    //Category
    {
        path: 'show-list-item/:CategoryListId',
        component: ListItemComponent
    },
    {
        path: 'add-list',
        component: AddListComponent
    },
    {
        path: 'add-list-item/:CategoryListId/:CategoryNameLabel',
        component: AddListItemComponent
    },
    {
        path: 'add-item-display/:CategoryListItemId/:ItemKey',
        component: AddItemDisplayComponent
    },


    {
        path: '**',
        component: ErrorComponent
    },
 
];


