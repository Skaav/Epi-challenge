import { Component } from '@angular/core';
import { Post } from 'src/app/Models/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss']
})
export class ActivePostComponent {

  postArray: Post[] = [];

  constructor(private postSvc: PostService) {

    this.postSvc.getPost().then(post => {
      this.postArray = post.filter(p => p.active);
    })
  }


}
