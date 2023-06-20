import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './modules/product/product-form/product-form.component';
import { ProductListComponent } from './modules/product/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductFormComponent },
  { path: 'product-list', component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
