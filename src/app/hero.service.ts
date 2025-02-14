import { Injectable } from '@angular/core';
import { Hero, MarvelApi } from './hero.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private ts: string = '1';
  private apikey: string = 'af06644182186bede64b88505c501506';
  private hash: string = 'dcfc360c4220a74cb74062f5e8bdf575';
  private key: string = `ts=${this.ts}&apikey=${this.apikey}&hash=${this.hash}`;
  private url : string = 'http://gateway.marvel.com/v1/public';

  constructor(
    private http: HttpClient
  ) { }

  public getHeroes(): Observable<MarvelApi> {
    return this.http.get<MarvelApi>(`${this.url}/characters?${this.key}`);
  }

  public getHeroesPaginated(pag: number, limit: number): Observable<MarvelApi> {
    const offset = (pag - 1) * limit;
    return this.http.get<MarvelApi>(`${this.url}/characters?&offset=${offset}&limit=${limit}&${this.key}`);
  }

  public getHero(id: number): Observable<MarvelApi> {
    return this.http.get<MarvelApi>(`${this.url}/characters/${id}?${this.key}`);
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http.get<MarvelApi>(`${this.url}/characters?nameStartsWith=${term}&${this.key}`).pipe(
      tap(data => console.log(data.data.results)),
      map(data => data.data.results.slice(0, 5))
    );
  }
}
