import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DeactivateGuard } from 'src/app/guards/deactivate.guard';
import { BlogsComponent } from './blogs/blogs.component';
import { NewsComponent } from './news/news.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [
  {
    path: '',
    // canActivateChild: [],
    // component: HomeComponent,
    children: [
      // {
      //   path: "",
      //   component: HomeComponent,
      // },
      {
        path: "blogs",
        component: BlogsComponent
      },
      {
        path: "news",
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
