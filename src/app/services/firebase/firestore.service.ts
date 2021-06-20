import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private roomsCollection: AngularFirestoreCollection<any>;
  rooms: Observable<any[]>;
  
  constructor(
    private store: AngularFirestore
  ) { 
    this.roomsCollection = this.store.collection('chatrooms');
    this.rooms = this.roomsCollection.valueChanges();
  }

  getRooms() {
    return this.rooms;
  }
}
