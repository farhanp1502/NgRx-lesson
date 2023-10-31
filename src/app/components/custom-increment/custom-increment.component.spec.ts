import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomIncrementComponent } from './custom-increment.component';

describe('CustomIncrementComponent', () => {
  let component: CustomIncrementComponent;
  let fixture: ComponentFixture<CustomIncrementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomIncrementComponent]
    });
    fixture = TestBed.createComponent(CustomIncrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
