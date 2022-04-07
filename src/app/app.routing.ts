import { RouterModule, Routes } from "@angular/router";


import { SignUpComponent } from "./core/components/sign-up/sign-up.component";
import { ContactComponent } from "./core/pages/contact/contact.component";
import { FAQComponent } from "./core/pages/faq/faq.component";
import { HomeComponent } from "./core/pages/home/home.component";



const APP_ROUTING: Routes=[
    {path:'home',redirectTo:'/',pathMatch:'full'},
    {path:'',component:HomeComponent},
    {path:'contact',component:ContactComponent},
    {path:'sign-up',component:SignUpComponent},
    {path:'faq',component:FAQComponent}
]

export const ROUTING = RouterModule.forRoot(APP_ROUTING)