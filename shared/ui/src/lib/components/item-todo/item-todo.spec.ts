import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemTodo } from './item-todo';

describe('ItemTodo', () => {
  let component: ItemTodo;
  let fixture: ComponentFixture<ItemTodo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemTodo],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemTodo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
