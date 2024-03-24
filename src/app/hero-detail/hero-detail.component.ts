import { Component, Input } from '@angular/core';
import { NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { RemoveSpacesPipe } from '../remove-spaces.pipe';

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  imports: [FormsModule, NgIf, UpperCasePipe, RemoveSpacesPipe],
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
