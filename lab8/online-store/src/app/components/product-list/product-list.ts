import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
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
  // Expose global function to the template
  encodeURIComponent = encodeURIComponent;

  @Input() products: Product[] = [];
  @Output() toggleFavorite = new EventEmitter<number>();
  @Output() deleteProduct = new EventEmitter<number>();

  displayProducts: Product[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      // each time parent updates products, refresh displayed copy
      this.displayProducts = [...this.products];
    }
  }

  onDelete(id: number): void {
    // remove from view and notify parent so it can update its master list
    this.displayProducts = this.displayProducts.filter((p) => p.id !== id);
    this.deleteProduct.emit(id);
  }

  onToggleFavorite(id: number): void {
    this.toggleFavorite.emit(id);
  }
}
