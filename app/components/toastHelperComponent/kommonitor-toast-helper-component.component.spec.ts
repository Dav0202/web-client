import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KommonitorToastHelperComponentComponent } from './kommonitor-toast-helper-component.component';

describe('KommonitorToastHelperComponentComponent', () => {
  let component: KommonitorToastHelperComponentComponent;
  let fixture: ComponentFixture<KommonitorToastHelperComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KommonitorToastHelperComponentComponent]
    });
    fixture = TestBed.createComponent(KommonitorToastHelperComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
