import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { RemoveSpacesPipe } from './remove-spaces.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroesComponent, RemoveSpacesPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lab7';
}
