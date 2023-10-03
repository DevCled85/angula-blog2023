import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmalCardComponent } from './components/smal-card/smal-card.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    BigCardComponent,
    SmalCardComponent,
    NewsCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
