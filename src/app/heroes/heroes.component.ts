import { Component } from '@angular/core';
import { Hero } from '../hero';
import { NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import {
  /* . . . */
  NgFor,
  /* . . . */
} from '@angular/common';
import { RemoveSpacesPipe } from '../remove-spaces.pipe';
import { InputFormatDirective } from '../input-format.directive';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    UpperCasePipe,
    FormsModule,
    NgFor,
    NgIf,
    RemoveSpacesPipe,
    InputFormatDirective,
    HeroDetailComponent,
  ],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm',
  // };
  heroes = HEROES;

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
