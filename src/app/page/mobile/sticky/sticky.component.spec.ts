/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StickyComponent } from './sticky.component';

describe('StickyComponent', () => {
  let component: StickyComponent;
  let fixture: ComponentFixture<StickyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
