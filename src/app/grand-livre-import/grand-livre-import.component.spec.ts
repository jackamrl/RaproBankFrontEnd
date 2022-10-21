import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandLivreImportComponent } from './grand-livre-import.component';

describe('GrandLivreImportComponent', () => {
  let component: GrandLivreImportComponent;
  let fixture: ComponentFixture<GrandLivreImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandLivreImportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrandLivreImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
