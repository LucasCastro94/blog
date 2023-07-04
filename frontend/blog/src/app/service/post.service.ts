import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'
import { Post } from '../model/Post';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private URL : string = 'http://localhost:3000/posts'

  constructor(private http: HttpClient) { }

  getPosts() : Observable<Post[]>
  {
    return this.http.get<Post[]>(this.URL)
  }

  getPostsByName(name:string): Observable<Post[]>
  {
    return this.http.get<Post[]>(this.URL).pipe(
      map(posts => posts.filter(post => post.nome.toLowerCase() === name.toLowerCase()))
    );
  }

  postMensagem(post: Post) : Observable<Post>
  {
    return this.http.post<Post>(this.URL,post)
  }
}
