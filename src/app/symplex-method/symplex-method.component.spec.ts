import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymplexMethodComponent } from './symplex-method.component';

describe('SymplexMethodComponent', () => {
  let component: SymplexMethodComponent;
  let fixture: ComponentFixture<SymplexMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymplexMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymplexMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
