import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { DeactivateGuard } from './guards/deactivate.guard';
import { UserFormComponent } from './pages/user-form/user-form.component';
// import { BlogsComponent } from './pages/home/blogs/blogs.component';
// import { NewsComponent } from './pages/home/news/news.component';
// import { ArticlesComponent } from './pages/home/articles/articles.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'user-list',
    // canLoad: [AuthGuard],
    loadChildren: () => import('./pages/user-list/user-list.module').then(m => m.UserListModule)
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'userForm',
    // component: UserFormComponent,
    loadChildren: () => import('./pages/user-form/user-form.module').then(m => m.UserFormModule),

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, HttpClientModule]
})

export class AppRoutingModule {
}
