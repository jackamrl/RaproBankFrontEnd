import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationPageComponent } from './operation-page.component';

describe('OperationPageComponent', () => {
  let component: OperationPageComponent;
  let fixture: ComponentFixture<OperationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
