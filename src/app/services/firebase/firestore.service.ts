import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ChatroomStore } from '../datastore/chatroom-store.service';
import { Global } from '../global.service';

@Injectable({
    providedIn: 'root'
})
export class FirestoreService {

    items: Observable<any[]>;
    roomCode = '';

    constructor(
        private global: Global, 
        private store: AngularFirestore,
        private chatroomStore: ChatroomStore
    ) { 
        this.chatroomStore.code.subscribe(value => {
            this.roomCode = value;
            if (this.global.codes.includes(this.roomCode)) {
                this.items = this.store.collection('chatrooms')
                                       .doc(this.roomCode)
                                       .collection('messages', ref => ref.orderBy('createdAt', 'desc').limit(25))
                                       .valueChanges();
            }
        });
    }

    getMessages(): Observable<any[]> {
        return this.items;
    }

    writeMessage(data: any): void {
        this.store.collection('chatrooms').doc(this.roomCode).collection('messages').add(data);
    }

}
