import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})

export class StarRatingComponent implements OnChanges {
  @Input() rating!: number;
  stars: boolean[] = [];

  ngOnChanges() {
    this.stars = Array(5).fill(false);
    for (let i = 0; i < this.rating; i++) {
      this.stars[i] = true;
    }
  }
}