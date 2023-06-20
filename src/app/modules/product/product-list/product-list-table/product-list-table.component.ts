import { Component } from '@angular/core';
import { faTrash, faEdit, faEye } from '@fortawesome/free-solid-svg-icons';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Product } from 'src/app/models/interfaces/Product';
import { DatabaseService } from 'src/app/services/database.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-product-list-table',
  templateUrl: './product-list-table.component.html',
  styleUrls: ['./product-list-table.component.scss'],
})
export class ProductListTableComponent {
  trashIcon = faTrash;
  editIcon = faEdit;
  watchIcon = faEye;

  data!: Product[];
  isLoading: boolean = false;
  productInfo: Product = { id: '', name: '', description: '', imgUrl: '' };
  deleteModal!: HTMLDialogElement | null;

  constructor(private supabase: DatabaseService) {}

  settings = [
    {
      title: 'Name',
    },
    {
      title: 'Description',
    },
    {
      title: 'Image',
    },
    {
      title: 'Acciones',
    },
  ];

  ngOnInit(): void {
    this.getProduct();
    this.deleteModal = document.querySelector('#deleteModal');
  }

  showDeleteModal(item: Product) {
    this.productInfo = item;
    this.deleteModal?.showModal();
  }

  async deleteProduct(id: string) {
    this.isLoading = true; // activa el spinner de loading
    await this.supabase.client.from('product').delete().eq('id', id); // borra el articulo
    this.isLoading = false; // desactiva el spinner de loading
    
  this.getProduct(); // actuliza el listado de productos
    this.deleteModal?.close();
  }

  // Metodo para obtener todos los productos
  async getProduct(): Promise<void> {
    this.isLoading = true; // activa el spinner de loading
    const response = await this.supabase.client.from('product').select();

    if (response.data !== null) {
      const { data } = response;
      this.data = data;
    } else {
      this.data = [];
    }
    this.isLoading = false; // desactiva el spinner de loading
  }
}
