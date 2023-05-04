import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePage4Component } from './create-page4.component';

describe('CreatePage4Component', () => {
  let component: CreatePage4Component;
  let fixture: ComponentFixture<CreatePage4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePage4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
