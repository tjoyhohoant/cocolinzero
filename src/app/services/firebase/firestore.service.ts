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
            console.log('roomcode ' + value);
            this.roomCode = value;
            if (this.global.codes.includes(this.roomCode)) {
                this.items = this.store.collection('chatrooms').doc(this.roomCode).collection('messages').valueChanges();
            }
        });
    }

    getMessages(): Observable<any[]> {
        console.log(this.global.chatRoomUnlocked);
        return this.items;
    }

    writeMessage(data: any): void {
        this.store.collection('chatrooms').doc(this.roomCode).collection('messages').add(data);
    }

}
