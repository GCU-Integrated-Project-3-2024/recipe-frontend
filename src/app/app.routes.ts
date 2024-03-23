import { Routes } from '@angular/router';
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { BaseLayoutComponent } from "./layouts/base-layout/base-layout.component";
import { RecipePageComponent } from './pages/recipe-page/recipe-page.component';
import { DiscoverPageComponent } from './pages/discover-page/discover-page.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { RecipebookPageComponent } from './pages/recipebook-page/recipebook-page.component';

export const routes: Routes = [

  // Routes With Navbar
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {path: '', component: HomePageComponent},
      {path: 'home', component: HomePageComponent},
      {path: 'recipebook', component: RecipebookPageComponent},
      {path: 'discover', component: DiscoverPageComponent},
      {path: 'recipe/:id', component: RecipePageComponent},
      {path: 'account', component: AccountPageComponent}
    ],
  },

  // Plain Routes
  {path: 'login', component: LoginPageComponent}

];
