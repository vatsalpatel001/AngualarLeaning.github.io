import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadderComponent } from './headder.component';

describe('HeadderComponent', () => {
  let component: HeadderComponent;
  let fixture: ComponentFixture<HeadderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
