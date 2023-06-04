import { Injectable } from '@angular/core';
import { Interfaccia } from './interfaccia';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiUrl: string = 'http://localhost:3000/pippo'

  arrList: Interfaccia[] = [];

  constructor() { }

  getToDo(): Promise<Interfaccia[]> {
    return fetch(this.apiUrl).then(response => response.json());
  }

  addToList(element: Interfaccia): Promise<Interfaccia> {
    return fetch(this.apiUrl, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(element)
    }).then(response => response.json());
  }

  updateToDo(element: Interfaccia): Promise<Interfaccia> {
    return fetch(this.apiUrl + '/' + element.id, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(element)
    }).then(response => response.json());
  }

  deleteToDo(id: number = 0): Promise<Interfaccia> {
    return fetch(this.apiUrl + '/' + id, {
      method: 'delete'
    }).then(response => response.json());
  }

  getSingleToDo(id: number): Promise<Interfaccia> {
    return fetch(this.apiUrl + '/' + id).then(response => response.json());
  }

}
