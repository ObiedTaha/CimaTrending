import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class GetTrendingService {

  constructor(private _HttpClient: HttpClient) { }

  public getTrending(): Observable <any> {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/all/day?api_key=a6b9255a8f57674053a3e39fcf06fbe7");
  }
  public getOneMovie(keyWord:string){
    return this._HttpClient.get(`https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&query=${keyWord}`)
  }
  public topRating(){
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=1`)
  }
  public upComing(){
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=1`)
  }
}
