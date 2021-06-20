import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firebase/firestore.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {

  private pin;

  items: Observable<any[]>;
  composedMsg;

  constructor(
    
    private activatedRoute: ActivatedRoute,
    public firestoreService: FirestoreService,
    private store: AngularFirestore,

  ) { 
    this.activatedRoute.paramMap.subscribe(params => { 
      this.pin = params.get('pin');
      console.log(this.pin);
    });

    this.items = this.store.collection('chatrooms').doc('7667').collection('messages').valueChanges();
  }

  ngOnInit(): void {
    // query firebase to get chat messages
    // display chat messages on html 

    // this.firestoreService.getRooms().subscribe(val => {
    //   console.log('ccc ' + val);
    // });
  }

  sendMessage(): void {
    console.log(this.composedMsg);

    // push msg to firestore
    const data = {
      text: this.composedMsg,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    this.store.collection('chatrooms').doc('7667').collection('messages').add(data);


    // clear form input
    this.composedMsg = '';
  }

}
