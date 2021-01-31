import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HeaderComponent } from './header/header.component';
import { CatalogComponent } from './catalog/catalog.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { AddCatalogComponent } from './add-catalog/add-catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatalogComponent,
    MainSliderComponent,
    AddCatalogComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    SidebarModule.forRoot(),
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
