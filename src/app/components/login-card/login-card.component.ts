import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-card',
  standalone: true,
  imports: [],
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.scss'
})
export class LoginCardComponent {
  @Output() toggleForms = new EventEmitter<void>();

  onRegisterClick() {
    this.toggleForms.emit();
  }
}
