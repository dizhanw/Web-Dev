import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductList implements OnChanges {
  @Input() products: Product[] = [];

  displayProducts: Product[] = [];
  favorites: Product[] = [];

  activeTab: 'all' | 'favorites' = 'all'; 

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.displayProducts = [...this.products];
      this.favorites = this.products.filter(p => p.isFavorite);
    }
  }

  onDelete(id: number): void {
    this.displayProducts = this.displayProducts.filter(p => p.id !== id);
    this.favorites = this.favorites.filter(p => p.id !== id);
  }

  onToggleFavorite(id: number) {
  const product = this.displayProducts.find(p => p.id === id);
  if (product) {
    product.isFavorite = !product.isFavorite;
  }
  
}

 
  selectTab(tab: 'all' | 'favorites') {
    this.activeTab = tab;
  }

  get productsToShow() {
    return this.activeTab === 'all' ? this.displayProducts : this.favorites;
  }
}