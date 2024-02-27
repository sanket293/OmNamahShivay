import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ErrorComponent } from '../components/shared/error/error.component';
import { AboutUsComponent } from '../components/navigation/header/about-us/about-us.component';
import { ContactUsComponent } from '../components/navigation/header/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from '../components/navigation/footer/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from '../components/navigation/footer/terms-conditions/terms-conditions.component';
import { PostComponent } from '../components/post/post.component';
import { CategoryListComponent } from '../components/category/list/category-list/category-list.component';
import { CategoryListItemComponent } from '../components/category/list-item/category-list-item/category-list-item.component';
import { CategoryItemDisplayComponent } from '../components/category/item-display/category-item-display/category-item-display.component';
import { CategoryItemListDisplayComponent } from '../components/category/item-display/category-item-list-display/category-item-list-display.component';

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
    // Header n Footer
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
        path: 'CategoryList', //list of all categories i.e stutiess, mantras, bhajans etc...
        component: CategoryListComponent
    },
    {
        path: 'CategoryList/:categoryItem', //select one catagory out of many i.e stuties
        component: CategoryListItemComponent
    },
    {
        path: 'CategoryList/:categoryItem/:itemKey/:language', //select one item out of many categoryItems i.e mahimna strotam in Sanskrit or Rudrashtakam in Gujarati
        component: CategoryItemDisplayComponent
    },
    {
        path: 'CategoryList/:itemKey/:language', //select one item out of many categoryItems i.e Shiv names 108, 1000
        component: CategoryItemListDisplayComponent
    },

    {
        path: '**',
        component: ErrorComponent
    },
];


