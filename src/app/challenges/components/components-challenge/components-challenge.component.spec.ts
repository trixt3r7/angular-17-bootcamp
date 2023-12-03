import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsChallengeComponent } from './components-challenge.component';

describe('ComponentsChallengeComponent', () => {
  let component: ComponentsChallengeComponent;
  let fixture: ComponentFixture<ComponentsChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsChallengeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentsChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
