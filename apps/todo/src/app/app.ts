/* eslint-disable @angular-eslint/prefer-inject */
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { _months } from './constants/month.constants';
import { MonthService } from './services/month/month';

@Component({
  imports: [RouterModule, CommonModule],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [
    MonthService
  ]
})
export class App {
  protected title = 'todo';

  public months = _months;

  public month: string;

  public constructor(private monthService: MonthService) {
    const currentMonth = this.months[new Date().getMonth()];
    this.onClick(currentMonth);
  }

  public onClick(month: string): void {
    this.month = month;
    this.monthService.set(this.month);
  }
}
