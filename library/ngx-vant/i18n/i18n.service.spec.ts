/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { I18nService } from './i18n.service';

describe('Service: I18n', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [I18nService]
    });
  });

  it('should ...', inject([I18nService], (service: I18nService) => {
    expect(service).toBeTruthy();
  }));
});
