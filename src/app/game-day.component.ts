import { Component } from '@angular/core';
import { HTTP_PROVIDERS, Http, Response } from '@angular/http';
import { LineScoreService } from './line-score.service';
import { LineScoreComponent } from './line-score/line-score.component';

import { Score } from './score';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'game-day-app',
  templateUrl: 'game-day.component.html',
  styleUrls: ['game-day.component.css'],
  directives: [LineScoreComponent],
  providers: [HTTP_PROVIDERS, LineScoreService]
})
export class GameDayAppComponent {

  constructor(private lineScoreService: LineScoreService) { }

  lineScore: Score;

  ngOnInit() {
    this.lineScoreService.getGameData()
        .subscribe(
          score => this.lineScore = score
        );
  };
}
