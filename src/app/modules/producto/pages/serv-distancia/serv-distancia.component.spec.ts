import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServDistanciaComponent } from './serv-distancia.component';

describe('ServDistanciaComponent', () => {
  let component: ServDistanciaComponent;
  let fixture: ComponentFixture<ServDistanciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServDistanciaComponent]
    });
    fixture = TestBed.createComponent(ServDistanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
