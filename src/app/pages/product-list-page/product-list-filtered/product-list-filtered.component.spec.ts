import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListFilteredComponent } from './product-list-filtered.component';

describe('ProductListFilteredComponent', () => {
  let component: ProductListFilteredComponent;
  let fixture: ComponentFixture<ProductListFilteredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListFilteredComponent]
    });
    fixture = TestBed.createComponent(ProductListFilteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
