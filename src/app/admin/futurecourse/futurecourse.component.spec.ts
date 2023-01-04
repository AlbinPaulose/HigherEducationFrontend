import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturecourseComponent } from './futurecourse.component';

describe('FuturecourseComponent', () => {
  let component: FuturecourseComponent;
  let fixture: ComponentFixture<FuturecourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuturecourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuturecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
