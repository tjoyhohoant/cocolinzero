import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firebase/firestore.service';

import firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
    selector: 'app-chatroom',
    templateUrl: './chatroom.component.html',
    styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {

    chatHistory: Observable<any[]>;
    composedMsg: string;

    constructor(
        public firestoreService: FirestoreService,
    ) { }

    ngOnInit(): void {
        // query firebase to get chat messages
        // display chat messages on html 
        this.renderMessages();
    }

    renderMessages() {
        this.chatHistory = this.firestoreService.getMessages();
    }

    sendMessage(): void {
        const data = {
            text: this.composedMsg,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        this.firestoreService.writeMessage(data);

        // clear form input
        this.composedMsg = '';
    }

}
