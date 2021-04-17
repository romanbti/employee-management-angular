import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriComponent } from './dri.component';

describe('DriComponent', () => {
  let component: DriComponent;
  let fixture: ComponentFixture<DriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
