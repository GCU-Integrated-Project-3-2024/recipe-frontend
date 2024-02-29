import {Component} from '@angular/core';
import { FeaturedRecipeBarComponent } from '../../components/featured-recipe/featured-recipe-bar/featured-recipe-bar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FeaturedRecipeBarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
