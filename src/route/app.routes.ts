import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ErrorComponent } from '../components/shared/error/error.component';
import { AboutUsComponent } from '../components/navigation/header/about-us/about-us.component';
import { ContactUsComponent } from '../components/navigation/header/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from '../components/navigation/footer/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from '../components/navigation/footer/terms-conditions/terms-conditions.component';
import { PostComponent } from '../components/post/post.component';
import { CategoryListComponent } from '../components/category/list/category-list.component';
import { CategoryListItemComponent } from '../components/category/list-item/category-list-item/category-list-item.component';
import { CategoryItemDisplayComponent } from '../components/category/item-display/category-item-display/category-item-display.component';
  
export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        redirectTo: 'Home',
        pathMatch: 'full'
    },
    {
        path: 'Home',
        component: HomeComponent
    },
    {
        path: 'About',
        component: AboutUsComponent
    },
    {
        path: 'Contact',
        component: ContactUsComponent
    },
    {
        path: 'Privacy-Policy',
        component: PrivacyPolicyComponent
    },
    {
        path: 'Terms-Conditions',
        component: TermsConditionsComponent
    },
    //Posts
    {
        path: 'Post/:postId',
        component: PostComponent
    },
    //Categories
    {
        path: 'List/:parmaLinkDescription',
        component: CategoryListComponent
    },
    {
        path: 'ListItem/:parmaLinkDescription/:categoryListId',
        component: CategoryListItemComponent
    },
    {
        path: 'ItemDisplay/:parmaLinkDescription/:categoryListItemId/:languageId/:availableLanguages',
        component: CategoryItemDisplayComponent
    },
    {
        path: '**',
        component: ErrorComponent
    },
];