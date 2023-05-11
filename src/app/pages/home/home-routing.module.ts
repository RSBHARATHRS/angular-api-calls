import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { NewsComponent } from './news/news.component';
import { ArticlesComponent } from './articles/articles.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
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
