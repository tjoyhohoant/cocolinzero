import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MessageBoardComponent } from './components/message-board/message-board.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { MainComponent } from './components/home/main/main.component';
import { QuotesComponent } from './components/home/quotes/quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    MessageBoardComponent,
    WishListComponent,
    MainComponent,
    QuotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
