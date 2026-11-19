import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Db } from './shared/services/db';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('project_ejt');
  dbService = inject(Db);

  ngOnInit() {
    this.dbService.dataTest();
  }
}
