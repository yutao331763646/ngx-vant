/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VanDocDemoCardComponent } from './van-doc-demo-card.component';

describe('VanDocDemoCardComponent', () => {
  let component: VanDocDemoCardComponent;
  let fixture: ComponentFixture<VanDocDemoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanDocDemoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanDocDemoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
