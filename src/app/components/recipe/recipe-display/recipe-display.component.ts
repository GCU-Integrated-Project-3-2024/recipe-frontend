import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListViewComponent } from '../recipe-list-view/recipe-list-view.component';
import { RecipeGridViewComponent } from '../recipe-grid-view/recipe-grid-view.component';
import { ModalComponent } from '../../modal/modal.component';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-recipe-display',
  standalone: true,
  imports: [CommonModule, RecipeListViewComponent, RecipeGridViewComponent, ModalComponent, HeaderComponent],
  templateUrl: './recipe-display.component.html',
  styleUrl: './recipe-display.component.scss'
})

export class RecipeDisplayComponent {
  recipes = [
    { id: 1, name: 'Recipe 1', imageUrl: '/assets/images/food/burger.jpeg', rating: 4.5 },
    { id: 2, name: 'Recipe 2', imageUrl: '/assets/images/food/fishchips.jpg', rating: 3.8 },
    { id: 3, name: 'Recipe 3', imageUrl: '/assets/images/food/chili.jpg', rating: 2.4 },
    { id: 4, name: 'Recipe 4', imageUrl: '/assets/images/food/omelette.jpg', rating: 1.2 },
    { id: 5, name: 'Recipe 5', imageUrl: '/assets/images/food/smoothie.jpg', rating: 0.5 },
    { id: 6, name: 'Recipe 6', imageUrl: '/assets/images/food/smoothie.jpg', rating: 2 },
    { id: 7, name: 'Recipe 7', imageUrl: '/assets/images/food/smoothie.jpg', rating: 6 }
  ];

  @ViewChild(ModalComponent) modal!: ModalComponent;

  isListView: boolean = true;

  switchToListView() {
    this.isListView = true;
  }

  switchToGridView() {
    this.isListView = false;
  }

  openModal() {
    this.modal.openModal();
  }

  closeModal() {
    this.modal.closeModal();
  }
}
