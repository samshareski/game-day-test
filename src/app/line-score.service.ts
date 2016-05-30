import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Score } from './score';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class LineScoreService {

  constructor(private http: Http) { }
  private gameData: Observable<Object>;

  ngOnInit() {
    this.gameData = Observable.interval(10000)
                     .flatMap(tick =>
                       this.http.get("http://gd2.mlb.com/components/game/mlb/year_2016/month_05/day_27/gid_2016_05_27_phimlb_chnmlb_1/linescore.json"))
                     .map(this.extractData)
                     .publish()
                     .refCount();
  }
  
  private extractData(res: Response): Score {
    let body = res.json();
    return body.data || { };
  };
}
