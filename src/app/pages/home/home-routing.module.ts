import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DeactivateGuard } from 'src/app/guards/deactivate.guard';
import { BlogsComponent } from './blogs/blogs.component';
import { NewsComponent } from './news/news.component';
import { ArticlesComponent } from './articles/articles.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    // canActivateChild: [],
    // component: HomeComponent,
    canActivateChild: [AuthGuard],
    children: [
      // {
      //   path: "",
      //   component: HomeComponent,
      // },
      {
        path: "blogs",
        // canActivate: [AuthGuard],
        component: BlogsComponent
      },
      {
        path: "news",
        // canActivate: [AuthGuard],
        component: NewsComponent,
      },
      {
        path: "articles",
        component: ArticlesComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
