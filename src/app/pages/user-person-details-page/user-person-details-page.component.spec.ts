import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPersonDetailsPageComponent } from './user-person-details-page.component';

describe('UserPersonDetailsPageComponent', () => {
  let component: UserPersonDetailsPageComponent;
  let fixture: ComponentFixture<UserPersonDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPersonDetailsPageComponent]
    });
    fixture = TestBed.createComponent(UserPersonDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
