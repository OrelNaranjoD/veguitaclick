import { Routes } from '@angular/router';

import { HomeComponent } from './pages/system/home/home.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { ProductComponent } from './pages/product/product/product.component';
import { ProductAddComponent } from './pages/product/product-add/product-add.component';
import { Page404Component } from './pages/system/page404/page404.component';
import { ProductEditComponent } from './pages/product/product-edit/product-edit.component';


export const routes: Routes = [
    // Rutas de productos
    { path: 'home', component: HomeComponent },
    { path: '404', component: Page404Component},
    { path: 'products', component: ProductListComponent },
    { path: 'product/new', component: ProductAddComponent},
    { path: 'product/edit/:id', component: ProductEditComponent},
    { path: 'product/:id', component: ProductComponent },

    // Ruta por defecto
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: '404' }

];
