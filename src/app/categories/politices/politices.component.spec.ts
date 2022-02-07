import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticesComponent } from './politices.component';

describe('PoliticesComponent', () => {
  let component: PoliticesComponent;
  let fixture: ComponentFixture<PoliticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
