import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ArtCollectionsComponent } from './art-collections/art-collections.component';
import { CreateArtComponent } from './create-art/create-art.component';
import { ColorDirective } from './directive/color/color.directive';
import { HeaderInterceptor } from './header.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtCollectionsComponent,
    CreateArtComponent,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi:true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
