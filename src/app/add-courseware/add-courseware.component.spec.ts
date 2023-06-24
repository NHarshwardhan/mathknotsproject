import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoursewareComponent } from './add-courseware.component';

describe('AddCoursewareComponent', () => {
  let component: AddCoursewareComponent;
  let fixture: ComponentFixture<AddCoursewareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCoursewareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCoursewareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
