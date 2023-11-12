import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistbodyComponent } from './productlistbody.component';

describe('ProductlistbodyComponent', () => {
  let component: ProductlistbodyComponent;
  let fixture: ComponentFixture<ProductlistbodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductlistbodyComponent]
    });
    fixture = TestBed.createComponent(ProductlistbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
