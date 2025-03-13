import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersFacetsComponent } from './filters-facets.component';

describe('FiltersFacetsComponent', () => {
  let component: FiltersFacetsComponent;
  let fixture: ComponentFixture<FiltersFacetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersFacetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltersFacetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
