import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service'
import { Post } from '../model/Post'
import { __assign } from 'tslib';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts: Post[] = []
  post: Post = new Post
  nome:string

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.findPosts()
  }

  findPosts() {
    this.postService.getPosts().subscribe((post: Post[]) => {
      this.posts = post
    })
  }

  cadastrarMensagem() {
    this.postService.postMensagem(this.post).subscribe((data: Post) => {
      this.post = data
      location.assign('/feed')
    })
  }

  findByName() {
    this.postService.getPostsByName(this.nome).subscribe({
      next: posts => {
        posts.length > 0 ? this.posts = posts : this.findPosts()
      }  ,
      error: err => console.log(err)
    })
  }

}
