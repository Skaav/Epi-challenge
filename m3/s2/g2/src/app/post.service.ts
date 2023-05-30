import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  api: string = "../assets/post.json";
  constructor() { }
}
