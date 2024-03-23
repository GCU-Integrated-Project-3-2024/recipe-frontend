import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipebookPageComponent } from './recipebook-page.component';

describe('RecipebookPageComponent', () => {
  let component: RecipebookPageComponent;
  let fixture: ComponentFixture<RecipebookPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipebookPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipebookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
