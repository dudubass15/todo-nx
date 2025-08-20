import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-text-input',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './text-input.html',
  styleUrl: './text-input.scss',
})
export class TextInput {
  @Input() value = '';

  @Input() placeholder = 'Input';

  @Input() id = 'input';
}
