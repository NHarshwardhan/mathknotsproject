import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideolearnComponent } from './videolearn.component';

describe('VideolearnComponent', () => {
  let component: VideolearnComponent;
  let fixture: ComponentFixture<VideolearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideolearnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideolearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
