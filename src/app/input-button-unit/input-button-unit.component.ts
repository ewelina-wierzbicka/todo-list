import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input class="todo-input" #inputElementRef (keyup.enter) = "submitValue($event.target.value)">
    <button class="btn" (click)="submitValue(inputElementRef.value)">Save</button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

title: string;

@Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

submitValue(title: string) {
  this.submit.emit(title);
  console.log(title);
}

generateTitle(): string {
  return 'This title was generated by a method.';
}

}