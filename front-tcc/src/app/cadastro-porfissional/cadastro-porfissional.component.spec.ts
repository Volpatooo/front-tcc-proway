import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPorfissionalComponent } from './cadastro-porfissional.component';

describe('CadastroPorfissionalComponent', () => {
  let component: CadastroPorfissionalComponent;
  let fixture: ComponentFixture<CadastroPorfissionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroPorfissionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroPorfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
