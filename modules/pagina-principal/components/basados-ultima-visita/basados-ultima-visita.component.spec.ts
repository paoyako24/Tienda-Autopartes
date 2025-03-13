import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasadosUltimaVisitaComponent } from './basados-ultima-visita.component';

describe('BasadosUltimaVisitaComponent', () => {
  let component: BasadosUltimaVisitaComponent;
  let fixture: ComponentFixture<BasadosUltimaVisitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasadosUltimaVisitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasadosUltimaVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
