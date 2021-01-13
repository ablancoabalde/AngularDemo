import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './products/details/details.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductlistComponent } from './products/productlist/productlist.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductlistComponent },
  { path: 'product/:id', component: DetailsComponent },
  { path: '**', component: NotFoundComponent }, // Cuando la ruta no exista
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
