import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Product } from 'src/app/models/interfaces/Product';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  productInfo!: Product[];
  submitted: boolean = false;
  isBeenSubmitted!: boolean;

  constructor(private supabase: DatabaseService) {}

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null),
      imgUrl: new FormControl(null),
    });
  }

  async addProduct() {
    const { name, description, imgUrl } = this.productForm.controls;
    const data = { name: name.value, description: description.value, imgUrl: imgUrl.value,}; // prettier-ignore

    this.isBeenSubmitted = true;
    await this.supabase.client.from('product').insert(data); // este metodo ingresa los productos
    this.submitted = true;
    this.isBeenSubmitted = false;

    if (this.submitted) {
      this.productForm.reset();
    }

    setTimeout(() => {
      this.submitted = false;
    }, 4000);
  }
}
