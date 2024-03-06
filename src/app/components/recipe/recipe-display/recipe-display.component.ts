import { Component } from '@angular/core';
import { RecipeListViewComponent } from '../recipe-list-view/recipe-list-view.component';

@Component({
  selector: 'app-recipe-display',
  standalone: true,
  imports: [RecipeListViewComponent],
  templateUrl: './recipe-display.component.html',
  styleUrl: './recipe-display.component.scss'
})
export class RecipeDisplayComponent {

}
