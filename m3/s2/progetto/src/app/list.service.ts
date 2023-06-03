import { Injectable } from '@angular/core';
import { MyTodo } from './interfaccia';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  apiUrl: string = 'https://localhost:3000/todos'

  arrList: MyTodo[] = [];

  constructor() { }

  getToDo(): Promise<MyTodo[]> {
    return fetch(this.apiUrl).then(response => response.json());
  }

  addToList(element: MyTodo): Promise<MyTodo> {
    return fetch(this.apiUrl, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(element)
    }).then(response => response.json());
  }

  updateToDo(element: MyTodo): Promise<MyTodo> {
    return fetch(this.apiUrl + '/' + element.id, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(element)
    }).then(response => response.json());
  }

  deleteToDo(id: number = 0): Promise<MyTodo> {
    return fetch(this.apiUrl + '/' + id, {
      method: 'delete'
    }).then(response => response.json());
  }
}