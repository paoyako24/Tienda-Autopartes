import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersFacesComponent } from './filters-faces.component';

describe('FiltersFacetsComponent', () => {
  let component: FiltersFacesComponent;
  let fixture: ComponentFixture<FiltersFacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersFacesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltersFacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
