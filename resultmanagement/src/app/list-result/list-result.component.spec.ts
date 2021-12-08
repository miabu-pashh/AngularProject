import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResultComponent } from './list-result.component';

describe('ListResultComponent', () => {
  let component: ListResultComponent;
  let fixture: ComponentFixture<ListResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
