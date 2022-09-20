import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietePageComponent } from './societe-page.component';

describe('SocietePageComponent', () => {
  let component: SocietePageComponent;
  let fixture: ComponentFixture<SocietePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocietePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocietePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
