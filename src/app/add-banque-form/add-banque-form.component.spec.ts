import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBanqueFormComponent } from './add-banque-form.component';

describe('AddBanqueFormComponent', () => {
  let component: AddBanqueFormComponent;
  let fixture: ComponentFixture<AddBanqueFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBanqueFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBanqueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
