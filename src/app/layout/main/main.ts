import { Component } from '@angular/core';
import { GameStart } from '../game-start/game-start';

@Component({
  imports: [GameStart],
  selector: 'app-main',
  styleUrl: './main.scss',
  templateUrl: './main.html',
})
export class Main {}
