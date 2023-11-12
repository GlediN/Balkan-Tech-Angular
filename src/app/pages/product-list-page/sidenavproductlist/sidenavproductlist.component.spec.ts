import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavproductlistComponent } from './sidenavproductlist.component';

describe('SidenavproductlistComponent', () => {
  let component: SidenavproductlistComponent;
  let fixture: ComponentFixture<SidenavproductlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavproductlistComponent]
    });
    fixture = TestBed.createComponent(SidenavproductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
