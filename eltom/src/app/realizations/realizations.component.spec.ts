import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizationsComponent } from './realizations.component';

describe('RealizationsComponent', () => {
  let component: RealizationsComponent;
  let fixture: ComponentFixture<RealizationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealizationsComponent]
    });
    fixture = TestBed.createComponent(RealizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
