import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraitBancaireAddComponent } from './extrait-bancaire-add.component';

describe('ExtraitBancaireAddComponent', () => {
  let component: ExtraitBancaireAddComponent;
  let fixture: ComponentFixture<ExtraitBancaireAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraitBancaireAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraitBancaireAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
