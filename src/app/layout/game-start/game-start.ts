import { Component, inject } from '@angular/core';
import { Db } from '../../shared/services/db';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [JsonPipe],
  selector: 'app-game-start',
  styleUrl: './game-start.scss',
  templateUrl: './game-start.html',
})
export class GameStart {
  dbService = inject(Db);
}
