import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListBodyComponent } from './product-list-body.component';

describe('ProductListBodyComponent', () => {
  let component: ProductListBodyComponent;
  let fixture: ComponentFixture<ProductListBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListBodyComponent]
    });
    fixture = TestBed.createComponent(ProductListBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
