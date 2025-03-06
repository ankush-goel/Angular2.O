import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewComponent } from './my-new-component.component';

describe('MyNewComponentComponent', () => {
  let component: MyNewComponent;
  let fixture: ComponentFixture<MyNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
