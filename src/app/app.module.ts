import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';


import { GalleryComponent } from './components/gallery/gallery.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { MainComponent } from './components/home/main/main.component';
import { QuotesComponent } from './components/home/quotes/quotes.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { ApplicationComponent } from './components/application/application.component';
import { AuthChatroomDialogComponent } from './components/dialog/auth-chatroom-dialog/auth-chatroom-dialog.component';
import { HappyBirthdayDialogComponent } from './components/dialog/happy-birthday-dialog/happy-birthday-dialog.component';
import { ChatroomComponent } from './components/chatroom/chatroom.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    WishListComponent,
    MainComponent,
    QuotesComponent,
    ToolbarComponent,
    SidePanelComponent,
    ApplicationComponent,
    AuthChatroomDialogComponent,
    HappyBirthdayDialogComponent,
    ChatroomComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule, 
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatTabsModule,
    MatInputModule,
    MatDialogModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
