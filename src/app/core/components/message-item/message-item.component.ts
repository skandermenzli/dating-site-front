import {Component, Input, OnInit} from '@angular/core';
import {MessageI, MessagePaginateI} from "../../Model/message.interface";
import {Observable} from "rxjs";
import {ChatService} from "../../services/chat-service/chat.service";

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {

  @Input() name? : string = "Farouk";

  constructor(private chatService : ChatService) { }

  //messages$ : Observable<MessagePaginateI>  = this.chatService.getMessages();

  ngOnInit(): void {
  }
}
