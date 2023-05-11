import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Observable, tap } from 'rxjs';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      deps: [ApiService],
      useFactory: initializeAppApi,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
    console.log("App module:");
  }
}

function initializeAppTimeoutFn(): () => Promise<any> {
  return () => new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("initializeAppFn");
      resolve(true);
    }, 2200)
  })
}

function initializeAppApi(apiService: ApiService): () => Promise<void> {
  return () => new Promise(async (resolve, reject) => {
    console.log("initializeAppApi:", apiService);
    apiService.getData().subscribe(() => {
      resolve();
    })
  })
}
