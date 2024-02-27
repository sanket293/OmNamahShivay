import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ErrorComponent } from '../components/shared/error/error.component';
import { AppStrings } from '../constants/appstrings.model';
import { PostComponent } from '../components/show/post/post.component';
import { ListItemComponent } from '../components/show/list-item/list-item.component';
import { AddListItemComponent } from '../components/add/add-list-item/add-list-item.component';
import { AddListComponent } from '../components/add/add-list/add-list.component';
import { AddItemDisplayComponent } from '../components/add/add-item-display/add-item-display.component';
import { AddPostComponent } from '../components/add/add-post/add-post.component';

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
        path: 'show-post-details/:postId',
        component: PostComponent
    },
    {
        path: 'add-post',
        component: AddPostComponent
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


