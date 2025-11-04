import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatformComponent } from './matform.component';

describe('MatformComponent', () => {
  let component: MatformComponent;
  let fixture: ComponentFixture<MatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
