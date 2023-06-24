import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideolearnContentComponent } from './videolearn-content.component';

describe('VideolearnContentComponent', () => {
  let component: VideolearnContentComponent;
  let fixture: ComponentFixture<VideolearnContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideolearnContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideolearnContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
