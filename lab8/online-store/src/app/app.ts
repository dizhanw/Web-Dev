import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductList } from './components/product-list/product-list';
import { ProductItemComponent } from './components/product-item/product-item';
import { RouterOutlet } from '@angular/router';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ProductList, ProductItemComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];
  selectedCategoryId: number | null = null;
  filteredProducts: Product[] = [];

  // favorites list maintained here
  favorites: Product[] = [];

  // simple view state (without router)
  showFavoritesPage = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Category[]>('/categories.json').subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => {
        console.error('Failed to load categories.json', err);
      },
    });

    this.http.get<Product[]>('/products.json').subscribe({
      next: (data) => {
        // ensure new field exists on every product
        this.products = data.map((p) => ({ ...p, isFavorite: false }));
        this.applyFilter();
      },
      error: (err) => {
        console.error('Failed to load products.json', err);
      },
    });
  }

  onCategorySelect(id: number): void {
    this.selectedCategoryId = id;
    this.applyFilter();
  }

  // remove a product completely (called from child)
  deleteProduct(id: number): void {
    this.products = this.products.filter((p) => p.id !== id);
    // recalc filtered and favorites
    this.applyFilter();
    this.favorites = this.products.filter((p) => p.isFavorite);
  }

  // show favorites view
  openFavorites(): void {
    this.showFavoritesPage = true;
  }

  // go back to main view
  openMain(): void {
    this.showFavoritesPage = false;
  }

  private applyFilter(): void {
    if (this.selectedCategoryId === null) {
      this.filteredProducts = [];
      return;
    }
    this.filteredProducts = this.products.filter(
      (p) => p.categoryId === this.selectedCategoryId
    );
  }

  // toggle favorite state and recompute favorites array
  // productId comes from child event; we don't enforce its type here to keep templates happy
  toggleFavorite(productId: any): void {
    const product = this.products.find((p) => p.id === productId);
    if (!product) {
      return;
    }
    product.isFavorite = !product.isFavorite;
    // rebuild favorites list
    this.favorites = this.products.filter((p) => p.isFavorite);
  }
}
