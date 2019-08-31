import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private storageKey="myTodoKey";
  private todoList;
  private defaulTodoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'}
  ];
  getTodoList() {
    return this.todoList;
  }

  saveList(){
    this.storageService.setData(this.storageKey, this.todoList);
  }

addItem(item: TodoItem){
  this.todoList.push(item);
  this.saveList();
}

updateItem(item: TodoItem, change) {
const index = this.todoList.indexOf(item);
this.todoList[index] = {...item, ...change};
this.saveList();
}

deleteItem(item: TodoItem) {
  const index = this.todoList.indexOf(item);
  this.todoList.splice(index, 1);
  this.saveList();
}


  constructor(private storageService: StorageService) {
    this.todoList = storageService.getData(this.storageKey) || this.defaulTodoList;
   }
}
