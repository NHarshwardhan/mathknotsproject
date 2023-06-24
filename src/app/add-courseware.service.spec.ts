import { TestBed } from '@angular/core/testing';

import { AddCoursewareService } from './add-courseware.service';

describe('AddCoursewareService', () => {
  let service: AddCoursewareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddCoursewareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
