import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBurgerComponent } from './admin-burger.component';

describe('AdminBurgerComponent', () => {
  let component: AdminBurgerComponent;
  let fixture: ComponentFixture<AdminBurgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBurgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
