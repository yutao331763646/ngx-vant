/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuickstartComponent } from './quickstart.component';

describe('QuickstartComponent', () => {
  let component: QuickstartComponent;
  let fixture: ComponentFixture<QuickstartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickstartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
