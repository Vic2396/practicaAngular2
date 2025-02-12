import { Injectable } from '@angular/core';
import { Hero, MarvelApi } from './hero.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private ts: string = '1';
  private apikey: string = 'af06644182186bede64b88505c501506';
  private hash: string = 'dcfc360c4220a74cb74062f5e8bdf575';
  private url = `http://gateway.marvel.com/v1/public/comics?ts=${this.ts}&apikey=${this.apikey}&hash=${this.hash}`;

  constructor(
    private http: HttpClient
  ) { }


  public getHeroes(): Observable<MarvelApi> {
    return this.http.get<MarvelApi>(`${this.url}`);

  }

  public getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.url}/heroes/${id}`);
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http.get<Hero[]>(`${this.url}/?name=${term}`);
  }
}
