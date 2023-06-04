import { Interfaccia } from "./interfaccia";

export class Service implements Interfaccia {
    id?: number | undefined;
    title: string;
    completed: boolean;

    constructor(title: string, completed: boolean, id?: number) {
        this.title = title;
        this.completed = completed;
        this.id = id;
    }
}
