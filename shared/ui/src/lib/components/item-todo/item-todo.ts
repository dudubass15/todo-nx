import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-item-todo',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './item-todo.html',
  styleUrl: './item-todo.scss',
})
export class ItemTodo {
  @Input() id!: number;

  @Input() descricao!: string;

  @Input() data!: Date;

  @Input() concluida = false;

  @Input() disabled = false;

  @Output() clickChange = new EventEmitter<number>();

  public updateStatus(): void {
    this.concluida = !this.concluida;
    this.emitId(this.id);
  }

  public emitId(id: number): void {
    this.clickChange.emit(id);
  }
}
