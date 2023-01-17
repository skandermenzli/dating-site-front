import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat-service/chat.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }

  filter(input: any){
    console.log(input.value);
    this.chatService.emitSearchedRooms(10, 0,input.value)
    //this.chatService.emitPaginateMyRooms(10,0)
    
  }
}
