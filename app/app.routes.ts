import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
    {path: '', component: Home},

    {path: 'admin', 
        loadChildren: () => import('./admin/admin-module').then(m => m.AdminModule) },

    {path: 'public',
        loadChildren: () => import('./public/public-module').then(m => m.PublicModule)},
];
