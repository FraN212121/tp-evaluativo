import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDistanciaComponent } from './card-distancia.component';

describe('CardDistanciaComponent', () => {
  let component: CardDistanciaComponent;
  let fixture: ComponentFixture<CardDistanciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDistanciaComponent]
    });
    fixture = TestBed.createComponent(CardDistanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
