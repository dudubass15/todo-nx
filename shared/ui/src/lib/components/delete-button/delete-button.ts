import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-delete-button',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './delete-button.html',
  styleUrl: './delete-button.scss',
})
export class DeleteButton {
  @Output() clickChange = new EventEmitter<void>();
}
