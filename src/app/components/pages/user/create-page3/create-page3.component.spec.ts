import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePage3Component } from './create-page3.component';

describe('CreatePage3Component', () => {
  let component: CreatePage3Component;
  let fixture: ComponentFixture<CreatePage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePage3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
