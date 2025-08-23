import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DeleteButton, ItemTodo, PrimaryButton, TextInput } from '@itau/ui';
import localeDe from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

registerLocaleData(localeDe);

@Component({
  selector: 'app-home',
  imports: [PrimaryButton, TextInput, DeleteButton, DatePipe, ItemTodo, CommonModule],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss',
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
})
export class Home implements OnInit {
  public amount_tasks: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  public date = new Date();

  public tasks = [
    { id: 1, descricao: 'Tarefa 1', data: new Date(), concluida: false },
    { id: 2, descricao: 'Tarefa 2', data: new Date(), concluida: true },
    { id: 3, descricao: 'Tarefa 3', data: new Date(), concluida: false },
    { id: 4, descricao: 'Tarefa 4', data: new Date(), concluida: true },
    { id: 5, descricao: 'Tarefa 5', data: new Date(), concluida: false },
  ];

  public ngOnInit(): void {
    this.updateAmountTasks(this.tasks.filter(t => !t.concluida).length);
  }

  public updateTaskStatus(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.concluida = !task.concluida;
      this.updateAmountTasks(this.tasks.filter(t => !t.concluida).length);
    }
  }

  public onNewClick(): void {
    console.log('New button clicked');
  }

  public updateAmountTasks(amount: number): void {
    this.amount_tasks.next(amount);
  }

  public deleteTask(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.updateAmountTasks(this.tasks.filter(t => !t.concluida).length);
  }
}
