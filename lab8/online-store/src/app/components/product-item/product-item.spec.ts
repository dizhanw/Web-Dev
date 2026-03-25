import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductItemComponent } from './product-item';
import { Product } from '../../models/product.model';

// jasmine provides global spyOn but TypeScript needs declaration
declare const spyOn: any;

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;
  const sampleProduct: Product = {
    id: 42,
    name: 'Test',
    description: 'Desc',
    price: 0,
    rating: 0,
    images: [],
    link: '',
    likes: 0,
    categoryId: 0,
    isFavorite: false,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product = { ...sampleProduct };
    await fixture.whenStable();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit toggleFavorite when button clicked', () => {
    const spy = spyOn(component.toggleFavorite, 'emit');
    component.onToggleFavorite();
    expect(spy).toHaveBeenCalledWith(sampleProduct.id);
  });

  it('should emit deleteProduct when delete button clicked', () => {
    const spy = spyOn(component.deleteProduct, 'emit');
    component.onDelete();
    expect(spy).toHaveBeenCalledWith(sampleProduct.id);
  });

  it('button text reflects isFavorite state', () => {
    component.product.isFavorite = false;
    fixture.detectChanges();
    const btn: HTMLButtonElement = fixture.nativeElement.querySelector('.favorite');
    expect(btn.textContent).toContain('Add to Favorites');
    component.product.isFavorite = true;
    fixture.detectChanges();
    expect(btn.textContent).toContain('In Favorites');
  });
});