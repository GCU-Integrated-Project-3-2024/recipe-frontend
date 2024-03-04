import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RecipeBarComponent} from './recipe-bar.component';

describe('FeaturedRecipeBarComponent', () => {
  let component: RecipeBarComponent;
  let fixture: ComponentFixture<RecipeBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
