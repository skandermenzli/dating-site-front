import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {MessageI, MessagePaginateI} from "../../Model/message.interface";
import {ChatService} from "../../services/chat-service/chat.service";

@Component({
  selector: 'app-messages-nav',
  templateUrl: './messages-nav.component.html',
  styleUrls: ['./messages-nav.component.css']
})
export class MessagesNavComponent implements OnInit {

  constructor(private chatService : ChatService) { }

  friends : string[] = ["Salah","Sonia","Ali"] ;

  messages$ : Observable<MessagePaginateI>  = this.chatService.getMessages();
  messages! : MessageI[];
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
  }


}
