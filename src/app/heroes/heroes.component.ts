import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero.interface';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  imports: [RouterModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[] = [];
  public currentPage: number = 1;
  public totalPages: number = 1;
  public limit: number = 20;

  constructor(
    private heroService: HeroService
  ) {

  }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.data.results);
  }

  loadHeroes(): void {
    this.heroService.getHeroesPaginated(this.currentPage, this.limit).subscribe(heroes => {
      this.heroes = heroes.data.results;
      this.totalPages = Math.ceil(heroes.data.total / this.limit);
    });
  }

  changePage(dir: number): void {
    this.currentPage += dir;
    this.loadHeroes();
  }
}
