import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

import { HeaderComponent } from './header/header.component';
import { CatalogComponent } from './catalog/catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    SidebarModule.forRoot(),
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
