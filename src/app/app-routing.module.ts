import { NgModule } from "../../node_modules/@angular/core";
import {RouterModule, Routes} from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { ErrorComponent } from "./error/error.component";

const routs: Routes = [
    {path:'', component: AboutComponent},
    {path:'dashboard', component: DashboardComponent},
    {path:'login', component: LoginComponent},
    {path:'not-found', component:ErrorComponent},
    {path:'**', redirectTo:'not-found'}
]

@NgModule({
    imports:[RouterModule.forRoot(routs)],
    exports:[RouterModule]
})
export class AppRoutingMoudle{}