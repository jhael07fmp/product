import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/models/interfaces/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor() {}
  name!: string;
  public originalData!: Product[];

  dataToDisplay: any[] = [];

  private checkIfDataChanges = new BehaviorSubject<Product[]>(
    this.originalData
  );
  productInfo = this.checkIfDataChanges.asObservable();
  changeMenssage(productDetails: Product) {
    this.dataToDisplay?.push(productDetails);
    this.checkIfDataChanges.next(this.dataToDisplay);
  }
}
