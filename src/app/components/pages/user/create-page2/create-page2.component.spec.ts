import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePage2Component } from './create-page2.component';

describe('CreatePage2Component', () => {
  let component: CreatePage2Component;
  let fixture: ComponentFixture<CreatePage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePage2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
