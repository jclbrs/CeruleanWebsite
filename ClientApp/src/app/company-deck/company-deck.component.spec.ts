import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDeckComponent } from './company-deck.component';

describe('CompanyDeckComponent', () => {
  let component: CompanyDeckComponent;
  let fixture: ComponentFixture<CompanyDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyDeckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
