import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {

  private pin;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { 
    this.activatedRoute.paramMap.subscribe(params => { 
      this.pin = params.get('pin');
      console.log(this.pin);
    });
  }

  ngOnInit(): void {
    // query firebase to get chat messages
    // display chat messages on html 
  }

  sendMessage(): void {
    
  }

}
