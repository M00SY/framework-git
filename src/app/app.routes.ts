import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GallaryComponent } from './gallery/gallary.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
    { path : "", redirectTo : 'home', pathMatch : 'full'},
    {path : 'home', component : HomeComponent},
    {path : 'about',component : AboutComponent},

    {path : 'portfolio',component : PortfolioComponent},

    {path : 'gallery',component : GallaryComponent},
    {path : 'contact',component : ContactComponent},
];
