import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendPromoEmailComponent } from './send-promo-email.component';

describe('SendPromoEmailComponent', () => {
  let component: SendPromoEmailComponent;
  let fixture: ComponentFixture<SendPromoEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendPromoEmailComponent]
    });
    fixture = TestBed.createComponent(SendPromoEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
