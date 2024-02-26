import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ErrorComponent } from '../components/shared/error/error.component';
import { AppStrings } from '../constants/appstrings.model';
import { PostComponent } from '../components/post/post.component';
import { AboutUsComponent } from '../components/navigation/header/about-us/about-us.component';
import { ContactUsComponent } from '../components/navigation/header/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from '../components/navigation/footer/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from '../components/navigation/footer/terms-conditions/terms-conditions.component';
import { CategoryListComponent } from '../components/temp/category-list/category-list.component';
import { CategoryListItemComponent } from '../components/temp/category-list-item/category-list-item.component';
import { CategoryItemDisplayComponent } from '../components/temp/category-item-display/category-item-display.component';
import { CategoryItemListDisplayComponent } from '../components/temp/category-item-list-display/category-item-list-display.component';
import { AddCategoryListComponent } from '../components/temp/add/add-category-list/add-category-list.component';
import { AddCategoryListItemComponent } from '../components/temp/add/add-category-list-item/add-category-list-item.component';
import { AddCategoryItemDisplayComponent } from '../components/temp/add/add-category-item-display/add-category-item-display.component';
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

    // Home => Add-Category-Enum
    // Home => Add-Language-Enum
    // Home => Add-List(listId=0)
    // Home => List-Item(listId=101)
    //          => Add-List-Item(listItemId=1001)
    //          => Add-Item-Display(listItemId=1001)



    // {
    //     path: 'About',
    //     component: AboutUsComponent
    // },
    // {
    //     path: 'Contact',
    //     component: ContactUsComponent
    // },
    // {
    //     path: 'Privacy-Policy',
    //     component: PrivacyPolicyComponent
    // },
    // {
    //     path: 'Terms-Conditions',
    //     component: TermsConditionsComponent
    // },

    // //Categories
    // {
    //     path: 'CategoryList', //list of all categories i.e stutiess, mantras, bhajans etc...
    //     component: CategoryListComponent
    // },
    // {
    //     path: 'add-category-list/:CategoryListId',
    //     component: AddCategoryListComponent
    // },

    // {
    //     path: 'CategoryList/:CategoryListId', //select one catagory out of many i.e stuties
    //     component: CategoryListItemComponent
    // },
    // {
    //     path: 'add-category-list-item/:CategoryListId/:CategoryNameLabel',
    //     component: AddCategoryListItemComponent
    // },



    // {
    //     path: 'add-category-item-display/:CategoryListItemId/:ItemKey',
    //     component: AddCategoryItemDisplayComponent
    // },

    // {
    //     path: 'CategoryList/:categoryItem/:itemKey/:language', //select one item out of many categoryItems i.e mahimna strotam in Sanskrit or Rudrashtakam in Gujarati
    //     component: CategoryItemDisplayComponent
    // },
    // {
    //     path: 'CategoryList/:itemKey/:language', //select one item out of many categoryItems i.e Shiv names 108, 1000
    //     component: CategoryItemListDisplayComponent
    // },


];


