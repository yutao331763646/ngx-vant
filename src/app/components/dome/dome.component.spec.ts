/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DomeComponent } from './dome.component';

describe('DomeComponent', () => {
  let component: DomeComponent;
  let fixture: ComponentFixture<DomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
