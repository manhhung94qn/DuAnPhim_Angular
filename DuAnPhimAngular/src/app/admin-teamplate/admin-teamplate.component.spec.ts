import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTeamplateComponent } from './admin-teamplate.component';

describe('AdminTeamplateComponent', () => {
  let component: AdminTeamplateComponent;
  let fixture: ComponentFixture<AdminTeamplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTeamplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTeamplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
