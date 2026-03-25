import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app';
import { Product } from './models/product.model';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, online-store');
  });

  it('should toggle favorites and update list', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // start with one product
    app.products = [
      { id: 1, name: '', description: '', price: 0, rating: 0, images: [], link: '', likes: 0, categoryId: 0, isFavorite: false },
    ];

    app.toggleFavorite(1);
    expect(app.products[0].isFavorite).toBe(true);
    expect(app.favorites.length).toBe(1);

    app.toggleFavorite(1);
    expect(app.products[0].isFavorite).toBe(false);
    expect(app.favorites.length).toBe(0);
  });

  it('should delete product from master list and update filtered/favorites', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.products = [
      { id: 1, name: '', description: '', price: 0, rating: 0, images: [], link: '', likes: 0, categoryId: 1, isFavorite: false },
      { id: 2, name: '', description: '', price: 0, rating: 0, images: [], link: '', likes: 0, categoryId: 1, isFavorite: true },
    ];
    app.selectedCategoryId = 1;
    app.applyFilter();
    app.deleteProduct(2);
    expect(app.products.length).toBe(1);
    expect(app.filteredProducts.length).toBe(1);
    expect(app.favorites.length).toBe(0);
  });

  it('should toggle between main and favorites view', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.showFavoritesPage).toBe(false);
    app.openFavorites();
    expect(app.showFavoritesPage).toBe(true);
    app.openMain();
    expect(app.showFavoritesPage).toBe(false);
  });
});
