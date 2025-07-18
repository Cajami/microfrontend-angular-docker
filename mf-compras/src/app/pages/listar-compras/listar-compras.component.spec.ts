import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarComprasComponent } from './listar-compras.component';

describe('ListarComprasComponent', () => {
  let component: ListarComprasComponent;
  let fixture: ComponentFixture<ListarComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarComprasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
