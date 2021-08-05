import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComComponent } from './users-com.component';

describe('UsersComComponent', () => {
  let component: UsersComComponent;
  let fixture: ComponentFixture<UsersComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
