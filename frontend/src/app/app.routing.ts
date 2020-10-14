import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ErrorComponent } from './components/error/error.component';



const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'login', component: LoginComponent},
	{path: 'signup', component: SignupComponent},
	{path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing:ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);
