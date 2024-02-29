import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturedRecipeBarComponent } from './featured-recipe-bar.component';

describe('FeaturedRecipeBarComponent', () => {
  let component: FeaturedRecipeBarComponent;
  let fixture: ComponentFixture<FeaturedRecipeBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedRecipeBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedRecipeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
