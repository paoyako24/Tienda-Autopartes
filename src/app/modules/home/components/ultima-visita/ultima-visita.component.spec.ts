import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimaVisitaComponent} from './ultima-visita.component';

describe('BasadosUltimaVisitaComponent', () => {
  let component: UltimaVisitaComponent;
  let fixture: ComponentFixture<UltimaVisitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UltimaVisitaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UltimaVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
