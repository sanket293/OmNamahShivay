import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ErrorComponent } from '../components/shared/error/error.component';
import { Names108Component } from '../components/-categories/names/names-108/names-108.component';
import { Names1000Component } from '../components/-categories/names/names-1000/names-1000.component';
import { ShivChalisaComponent } from '../components/-categories/shiv-chalisa/shiv-chalisa.component';
import { AppStrings } from '../constants/appstrings.model';
import { AboutUsComponent } from '../components/navigation/header/about-us/about-us.component';
import { ContactUsComponent } from '../components/navigation/header/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from '../components/navigation/footer/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from '../components/navigation/footer/terms-conditions/terms-conditions.component';
import { PostComponent } from '../components/post/post.component';
import { CategoriesComponent } from '../components/navigation/side-nav/categories/categories.component';
import { CategoryListComponent } from '../components/category/category-list/category-list.component';
import { CategoryListItemComponent } from '../components/category/category-list-item/category-list-item.component';
import { CategoryItemDisplayComponent } from '../components/category/category-item-display/category-item-display.component';
import { CategoryItemListDisplayComponent } from '../components/category/category-item-list-display/category-item-list-display.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: AppStrings.RedirectHome,
        pathMatch: 'full'
    },
    {
        path: AppStrings.HomeLower,
        redirectTo: AppStrings.RedirectHome,
        pathMatch: 'full'
    },
    // Header n Footer
    {
        path: AppStrings.Home,
        component: HomeComponent
    },
    {
        path: AppStrings.AboutUs,
        component: AboutUsComponent
    },
    {
        path: AppStrings.ContactUs,
        component: ContactUsComponent
    },
    {
        path: AppStrings.PrivacyPolicy,
        component: PrivacyPolicyComponent
    },
    {
        path: AppStrings.TermsNConditions,
        component: TermsConditionsComponent
    },
    //Posts
    {
        path: AppStrings.PostRoute,
        component: PostComponent
    },
    //Categories
    {
        path: 'CategoryList', //list of all categories i.e stutiess, mantras, bhajans etc...
        component: CategoryListComponent
    },
    {
        path: 'CategoryList/:categoryListItem', //select one catagory out of many i.e stuties
        component: CategoryListItemComponent
    },
    {
        path: 'CategoryList/:categoryListItem/:itemKey/:language', //select one item out of many categoryItems i.e mahimna strotam in Sanskrit or Rudrashtakam in Gujarati
        component: CategoryItemDisplayComponent
    },
    {
        path: 'CategoryList/:itemKey/:language', //select one item out of many categoryItems i.e mahimna strotam in Sanskrit or Rudrashtakam in Gujarati
        component: CategoryItemListDisplayComponent
    },



    // {
    //     path: AppStrings.Stuties,
    //     component: StutieListComponent
    // },
    // {
    //     path: AppStrings.StutieItemRoute,
    //     component: StutiesComponent,
    // },

    // {
    //     path: AppStrings.Mantras,
    //     component: MantraListComponent
    // },
    // {
    //     path: AppStrings.MantraItemRoute,
    //     component: MantrasComponent
    // },

    // {
    //     path: AppStrings.Jyortilingas12,
    //     component: Jyortilingsas12ListComponent
    // },
    // {
    //     path: AppStrings.JyortilingaItemRoute,
    //     component: Jyortilingas12Component
    // },

    // {
    //     path: AppStrings.Bhajans,
    //     component: BhajanListComponent
    // },
    // {
    //     path: AppStrings.BhajanItemRoute,
    //     component: BhajansComponent
    // },
    // {
    //     path: AppStrings.ShivNames108Route,
    //     component: Names108Component
    // },
    // {
    //     path: AppStrings.ShivNames1000Route,
    //     component: Names1000Component
    // },

    // {
    //     path: AppStrings.ShivChalisaRoute,
    //     component: ShivChalisaComponent
    // },

    {
        path: AppStrings.ErrorRoute,
        component: ErrorComponent
    },
];


