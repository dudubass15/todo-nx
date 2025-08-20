import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-primary-button',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './primary-button.html',
  styleUrl: './primary-button.scss',
})
export class PrimaryButton {
  @Input() label = 'Primary Button';

  @Output() clickChange = new EventEmitter<void>();
}
