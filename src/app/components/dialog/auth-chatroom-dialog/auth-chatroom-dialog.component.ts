import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChatroomStore } from 'src/app/services/datastore/chatroom-store.service';
import { Global } from 'src/app/services/global.service';

@Component({
    selector: 'app-auth-chatroom-dialog',
    templateUrl: './auth-chatroom-dialog.component.html',
    styleUrls: ['./auth-chatroom-dialog.component.scss']
})
export class AuthChatroomDialogComponent implements OnInit {

    // the value inputted in the mat input
    public value;

    // set to true when user enters incorrect code
    public showErrorMsg = false;

    constructor(
        public router: Router,
        public global: Global,
        private chatroomStore: ChatroomStore,
        private dialogRef: MatDialogRef<AuthChatroomDialogComponent>,
    ) { }

    ngOnInit(): void {
    }

    onEnter(): void {
        if (this.global.codes.includes(this.value)) {
            console.log('success! rerouting...');
            this.showErrorMsg = false;
            this.global.chatRoomUnlocked = true;
            this.chatroomStore.setCode(this.value);
            this.router.navigate(['/overview/message']);
            this.dialogRef.close();
        } else {
            this.showErrorMsg = true;
            setTimeout(() => {
                this.showErrorMsg = false;
            }, 2000);
        }

        //clears input
        this.value = '';
    }

}
