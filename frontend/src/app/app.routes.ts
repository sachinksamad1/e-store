import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: '', redirectTo: '/home' , pathMatch: 'full'},
    { path: '**', component: NotFound }
];
