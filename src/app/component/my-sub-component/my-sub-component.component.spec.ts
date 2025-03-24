import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySubComponentComponent } from './my-sub-component.component';

describe('MySubComponentComponent', () => {
  let component: MySubComponentComponent;
  let fixture: ComponentFixture<MySubComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySubComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySubComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
