import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HeroComponent } from './components/hero/hero.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
//import { MatSelectCountryModule } from "@angular-material-extensions/select-country";

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FAQComponent } from './pages/faq/faq.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ExploreCardComponent } from './components/explore-card/explore-card.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AuthService } from './services/auth.service';
import { HeaderComponent } from './components/header/header.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { MessagingComponent } from './pages/messaging/messaging.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
//import { MatSelectionList } from '@angular/material/se'
import {MatListModule} from '@angular/material/list';
import { CreateRoomComponent } from './pages/messaging/create-room/create-room.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {RoomComponent} from "./pages/messaging/room/room.component";
import {MessageComponent} from "./pages/messaging/message/message.component";
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import {ImageService} from "./services/image.service";
import { ChoiceComponent } from './pages/choice/choice.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatGridListModule} from "@angular/material/grid-list";
import { NotificationNavComponent } from './components/notification-nav/notification-nav.component';
import { MessagesNavComponent } from './components/messages-nav/messages-nav.component';
import {SearchBarComponent} from "./components/search-bar/search-bar.component";
import { ProfileNavComponent } from './components/profile-nav/profile-nav.component';
import { LogoNavComponent } from './components/logo-nav/logo-nav.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import {MessageItemComponent} from "./components/message-item/message-item.component";
import { MyRoomsComponent } from './pages/my-rooms/my-rooms.component';
import { MatchedMessagingComponent } from './pages/matched-messaging/matched-messaging.component';
import { MatchModalComponent } from './pages/messaging/room/match-modal/match-modal.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
export function tokenGetter() {
  return localStorage.getItem('Token') || '{}' ;
}

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {
  extraHeaders:{
    authorization: tokenGetter()
  }
} };


@NgModule({
  declarations: [
    NavbarComponent,
    SignInComponent,
    HeroComponent,
    ContactComponent,
    FooterComponent,
    TestimonialsComponent,
    CarouselComponent,
    HomeComponent,
    SignUpComponent,
    FAQComponent,
    ExploreComponent,
    SidebarComponent,
    ExploreCardComponent,
    HeaderComponent,
    MessagingComponent,
    CreateRoomComponent,
    ProfilComponent,
    DashboardComponent,
    RoomComponent,
    MessageComponent,
    UploadImageComponent,
    ChoiceComponent,
    NotificationNavComponent,
    MessagesNavComponent,
    SearchBarComponent,
    ProfileNavComponent,
    LogoNavComponent,
    CategoriesComponent,
    MessageItemComponent,
    MyRoomsComponent,
    MatchedMessagingComponent,
    MatchModalComponent,
    DefaultImagePipe
  ],
  providers: [AuthService,ImageService],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgMultiSelectDropDownModule.forRoot(),
        HttpClientModule,
        MatPaginatorModule,
        MatCardModule,
        MatListModule,
        SocketIoModule.forRoot(config),
        DragDropModule,
        MatGridListModule,

        // MatSelectCountryModule.forRoot('de')


    ],
  exports: [
    NavbarComponent,
    SignInComponent,
    HeroComponent,
    ContactComponent,
    FooterComponent,
    TestimonialsComponent,
    CarouselComponent,
    SignUpComponent,
    HomeComponent,
    FAQComponent,
    ExploreComponent,
    SidebarComponent,
    ExploreCardComponent,
    HttpClientModule,
    ProfilComponent,
    DashboardComponent,
    RoomComponent,
    MessageComponent,
    CategoriesComponent
  ]
})
export class CoreModule { }
