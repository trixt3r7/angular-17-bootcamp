import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntaxHighlightComponent } from './syntax-highlight.component';

describe('SyntaxHighligthComponent', () => {
  let component: SyntaxHighlightComponent;
  let fixture: ComponentFixture<SyntaxHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyntaxHighlightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SyntaxHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
