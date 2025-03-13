import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenArticulosComponent } from './resumen-articulos.component';

describe('ResumenArticulosComponent', () => {
  let component: ResumenArticulosComponent;
  let fixture: ComponentFixture<ResumenArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumenArticulosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumenArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
