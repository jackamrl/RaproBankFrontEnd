import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanquePageComponent } from './banque-page.component';

describe('BanquePageComponent', () => {
  let component: BanquePageComponent;
  let fixture: ComponentFixture<BanquePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanquePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanquePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
