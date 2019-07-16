import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TicketComponent } from './ticket/ticket.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EventComponent } from './event/event.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'event', component:EventComponent},
    {path: 'ticket', component:TicketComponent},
    {path: 'login', component:LoginComponent },
    {path: 'about', component:AboutComponent },
    {path: 'registration', component:RegistrationComponent },
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component:PageNotFoundComponent}
    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]

})

export class AppRoutingModule {
    static routableComponenets = [
        HomeComponent,
        EventComponent,
        TicketComponent,
        LoginComponent,
        PageNotFoundComponent,
        RegistrationComponent,
        AboutComponent
    ]
}