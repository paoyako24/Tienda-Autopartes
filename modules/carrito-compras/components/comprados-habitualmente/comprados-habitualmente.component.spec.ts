import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradosHabitualmenteComponent } from './comprados-habitualmente.component';

describe('CompradosHabitualmenteComponent', () => {
  let component: CompradosHabitualmenteComponent;
  let fixture: ComponentFixture<CompradosHabitualmenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompradosHabitualmenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompradosHabitualmenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
