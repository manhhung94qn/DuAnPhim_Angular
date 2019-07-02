import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTeamplateComponent } from './customer-teamplate.component';

describe('CustomerTeamplateComponent', () => {
  let component: CustomerTeamplateComponent;
  let fixture: ComponentFixture<CustomerTeamplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTeamplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTeamplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
