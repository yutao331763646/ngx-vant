/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StyleGuideComponent } from './style-guide.component';

describe('StyleGuideComponent', () => {
  let component: StyleGuideComponent;
  let fixture: ComponentFixture<StyleGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
