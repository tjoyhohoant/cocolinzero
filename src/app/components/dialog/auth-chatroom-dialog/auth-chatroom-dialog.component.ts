import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Global } from 'src/app/services/global.service';

@Component({
  selector: 'app-auth-chatroom-dialog',
  templateUrl: './auth-chatroom-dialog.component.html',
  styleUrls: ['./auth-chatroom-dialog.component.scss']
})
export class AuthChatroomDialogComponent implements OnInit {

  // the value inputted in the mat input
  public value;

  // store this in firestore 
  private codes = [
    '7667',
    '0620',
    '0627'
  ];

  // set to true when user enters incorrect code
  public showErrorMsg = false;

  constructor(
    public router: Router,
    public global: Global,
    private dialogRef: MatDialogRef<AuthChatroomDialogComponent>,
  ) { }

  ngOnInit(): void {
  }

  onEnter(): void {
    if (this.codes.includes(this.value)) {
      console.log('success! rerouting...');
      this.showErrorMsg = false;
      this.global.chatRoomUnlocked = true;
      this.router.navigate(['/overview/message/'+this.value]);
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
