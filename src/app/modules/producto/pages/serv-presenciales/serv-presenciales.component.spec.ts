import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServPresencialesComponent } from './serv-presenciales.component';

describe('ServPresencialesComponent', () => {
  let component: ServPresencialesComponent;
  let fixture: ComponentFixture<ServPresencialesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServPresencialesComponent]
    });
    fixture = TestBed.createComponent(ServPresencialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
