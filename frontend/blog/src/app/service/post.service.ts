import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private URL : string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getPosts()
  {
    return this.http.get(this.URL+'/posts')
  }

  postMensagem(post: Post)
  {
    return this.http.post(this.URL+'/posts',post)
  }
}
