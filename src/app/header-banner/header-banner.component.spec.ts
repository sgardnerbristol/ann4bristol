/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { HeaderBannerComponent } from './header-banner.component';

describe('Component: HeaderBanner', () => {
  it('should create an instance', () => {
    let component = new HeaderBannerComponent();
    expect(component).toBeTruthy();
  });
});
