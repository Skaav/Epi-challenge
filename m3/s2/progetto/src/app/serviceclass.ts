import { MyTodo } from './interfaccia';

export class Serviceclass implements MyTodo {
    id?: number;
    title: string;
    completed: boolean;

    constructor(title: string, completed: boolean, id?: number) {
        this.title = title;
        this.completed = completed;
        this.id = id;
    }
}
