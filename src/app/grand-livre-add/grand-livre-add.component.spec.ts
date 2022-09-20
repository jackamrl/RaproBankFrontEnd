import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandLivreAddComponent } from './grand-livre-add.component';

describe('GrandLivreAddComponent', () => {
  let component: GrandLivreAddComponent;
  let fixture: ComponentFixture<GrandLivreAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandLivreAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrandLivreAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
