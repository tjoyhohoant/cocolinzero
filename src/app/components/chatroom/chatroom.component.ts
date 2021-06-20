import { Component, ElementRef, OnInit, Renderer2, ViewChild, AfterViewInit} from '@angular/core';
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
export class ChatroomComponent implements OnInit, AfterViewInit {
    @ViewChild("ref") myRef: ElementRef;

    chatHistory: Observable<any[]>;
    composedMsg: string = '';

    roles = ['coco', 'kaw'];
    currRole = 'coco';

    constructor(
        public firestoreService: FirestoreService,
        private renderer: Renderer2,
    ) { }

    ngOnInit(): void {
        // query firebase to get chat messages
        // display chat messages on html 
        this.renderMessages();
    }

    ngAfterViewInit(): void {
        
    }

    renderMessages() {
        this.chatHistory = this.firestoreService.getMessages();
    }

    sendMessage(): void {
        if (this.composedMsg.trim() === '') return;

        const data = {
            text: this.composedMsg,
            role: this.currRole,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        this.firestoreService.writeMessage(data);

        // scroll to latest msg
        // console.log(this.myRef.nativeElement.scrollTop);
        // this.myRef.nativeElement.scrollIntoView();
        // console.log(this.myRef.nativeElement.scrollTop);
        // const element = this.renderer.selectRootElement(`#ref`, true); // true to indicate that you will preserve the content
        // element.scrollIntoView({ behavior: 'smooth' });   // for smooth scrolling

        // clear form input
        this.composedMsg = '';
    }

    selectRole(index): void {
        this.currRole = this.roles[index];
    }

}
