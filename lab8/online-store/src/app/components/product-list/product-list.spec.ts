import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductList } from './product-list';

describe('ProductList', () => {
  let component: ProductList;
  let fixture: ComponentFixture<ProductList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit toggleFavorite when child item raises event', () => {
    const spy = spyOn(component.toggleFavorite, 'emit');
    component.onToggleFavorite(123);
    expect(spy).toHaveBeenCalledWith(123);
  });

  it('should emit deleteProduct when an item is deleted', () => {
    const spy = spyOn(component.deleteProduct, 'emit');
    component.onDelete(55);
    expect(spy).toHaveBeenCalledWith(55);
    expect(component.displayProducts).toEqual([]);
  });
});
