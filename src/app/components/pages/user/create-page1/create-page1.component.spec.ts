import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePage1Component } from './create-page1.component';

describe('CreatePage1Component', () => {
  let component: CreatePage1Component;
  let fixture: ComponentFixture<CreatePage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
