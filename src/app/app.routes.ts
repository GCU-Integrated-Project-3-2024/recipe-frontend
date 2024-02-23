import {Routes} from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {BaseLayoutComponent} from "./layouts/base-layout/base-layout.component";

export const routes: Routes = [

  // Routes With Navbar
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {path: '', component: HomePageComponent},
      {path: 'home', component: HomePageComponent},
    ],
  },

  // Plain Routes

  {path: 'login', component: LoginPageComponent}


];
