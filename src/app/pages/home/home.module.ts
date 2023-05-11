import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CustomDirective } from 'src/app/directives/custom.directive';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogsComponent } from './blogs/blogs.component';
import { NewsComponent } from './news/news.component';
import { ArticlesComponent } from './articles/articles.component';


@NgModule({
  declarations: [
    HomeComponent,
    BlogsComponent,
    NewsComponent,
    ArticlesComponent,
  
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
