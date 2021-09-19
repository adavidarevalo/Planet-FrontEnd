import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsIComponent } from './cards-i.component';

describe('CardsIComponent', () => {
  let component: CardsIComponent;
  let fixture: ComponentFixture<CardsIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
