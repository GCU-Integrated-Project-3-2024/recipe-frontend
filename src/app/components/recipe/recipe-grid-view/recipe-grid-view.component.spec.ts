import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeGridViewComponent } from './recipe-grid-view.component';

describe('RecipeGridViewComponent', () => {
  let component: RecipeGridViewComponent;
  let fixture: ComponentFixture<RecipeGridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeGridViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipeGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
