import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostSoldProductsComponent } from './most-sold-products.component';

describe('MostSoldProductsComponent', () => {
  let component: MostSoldProductsComponent;
  let fixture: ComponentFixture<MostSoldProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostSoldProductsComponent]
    });
    fixture = TestBed.createComponent(MostSoldProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
