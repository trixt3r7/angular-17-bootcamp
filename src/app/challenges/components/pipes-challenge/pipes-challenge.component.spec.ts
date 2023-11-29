import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesChallengeComponent } from './pipes-challenge.component';

describe('PipesChallengeComponent', () => {
  let component: PipesChallengeComponent;
  let fixture: ComponentFixture<PipesChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesChallengeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipesChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
