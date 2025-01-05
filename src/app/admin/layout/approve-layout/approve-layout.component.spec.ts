import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveLayoutComponent } from './approve-layout.component';

describe('ApproveLayoutComponent', () => {
  let component: ApproveLayoutComponent;
  let fixture: ComponentFixture<ApproveLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApproveLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
