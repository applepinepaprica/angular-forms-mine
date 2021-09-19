import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDeliveryFormComponent } from './food-delivery-form.component';

describe('FoodDeliveryFormComponent', () => {
  let component: FoodDeliveryFormComponent;
  let fixture: ComponentFixture<FoodDeliveryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodDeliveryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodDeliveryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
