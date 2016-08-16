/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ContactUsComponent } from './contact-us.component';

describe('Component: ContactUs', () => {
  it('should create an instance', () => {
    let component = new ContactUsComponent();
    expect(component).toBeTruthy();
  });
});
