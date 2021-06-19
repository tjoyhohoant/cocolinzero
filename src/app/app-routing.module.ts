import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationComponent } from './components/application/application.component';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MainComponent } from './components/home/main/main.component';
import { WishListComponent } from './components/wish-list/wish-list.component';


const routes: Routes = [
  { 
    path: 'overview', component: ApplicationComponent, 
    children: [
      { path: 'home', component: MainComponent },
      { path: 'message/:pin', component: ChatroomComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'wishlist', component: WishListComponent },
    ] 
  },
  { path: '', redirectTo: '/overview/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
