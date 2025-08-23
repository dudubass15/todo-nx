import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MonthService {
  private getCurrentMonth$: Subject<string> = new Subject<string>();

  public currentMonth$ = this.getCurrentMonth$.asObservable();

  public set(month: string): void {
    console.log('MonthService: setting month to', month);
    this.getCurrentMonth$.next(month);
  }
}
