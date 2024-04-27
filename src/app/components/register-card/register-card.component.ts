import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register-card',
  standalone: true,
  imports: [],
  templateUrl: './register-card.component.html',
  styleUrl: './register-card.component.scss'
})
export class RegisterCardComponent {
  @Output() toggleForms = new EventEmitter<void>(); 

  onLoginClick() {
    this.toggleForms.emit();
  }
}
