import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParkingSlotComponent } from './add-parking-slot.component';

describe('AddParkingSlotComponent', () => {
  let component: AddParkingSlotComponent;
  let fixture: ComponentFixture<AddParkingSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddParkingSlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParkingSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
