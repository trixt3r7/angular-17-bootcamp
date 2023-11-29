import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesChallengeComponent } from './directives-challenge.component';

describe('DirectivesChallengeComponent', () => {
  let component: DirectivesChallengeComponent;
  let fixture: ComponentFixture<DirectivesChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesChallengeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectivesChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
