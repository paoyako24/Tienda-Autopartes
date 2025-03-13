import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCarritoComprasComponent } from './producto-carrito-compras.component';

describe('ProductoCarritoComprasComponent', () => {
  let component: ProductoCarritoComprasComponent;
  let fixture: ComponentFixture<ProductoCarritoComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoCarritoComprasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductoCarritoComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
