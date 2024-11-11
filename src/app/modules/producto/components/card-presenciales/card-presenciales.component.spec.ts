import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPresencialesComponent } from './card-presenciales.component';

describe('CardPresencialesComponent', () => {
  let component: CardPresencialesComponent;
  let fixture: ComponentFixture<CardPresencialesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPresencialesComponent]
    });
    fixture = TestBed.createComponent(CardPresencialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
