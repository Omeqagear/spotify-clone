import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/scan';
import { Observable } from 'rxjs/Observable';
import {
  ConnectableObservable,
} from 'rxjs/observable/ConnectableObservable';

import { Subject } from 'rxjs/Subject';
import { SearchHistory } from '../models/search-history';
import { StorageService } from './storage.service';
import { Artist } from '../models/artist';


@Injectable()
export class SearchHistoryService {

  private results: Subject<SearchHistory>;
  private resets: Subject<SearchHistory[]>;
  private histories: ConnectableObservable<SearchHistory | SearchHistory[]>;
  private max = 10;
  private storageKey = 'searchHistory';

  constructor(private storageService: StorageService) {
    this.results = new Subject<SearchHistory>();
    this.resets = new Subject<SearchHistory[]>();
    this.histories = this.results
      .merge(this.resets)
      .scan((histories: SearchHistory[], result) => {
        if (Array.isArray(result)) {
          return result;
        }

        const duplicateIndex = histories.findIndex((record) => {
          return record.type === result.type &&
            record.id === result.id;
        });
        if (duplicateIndex > -1) {
          histories.splice(duplicateIndex, 1);
        }

        return [{ id: result.id, name: result.name, type: result.type }]
          .concat(histories)
          .slice(0, this.max);
      }, [])
      .do((histories) => {
        this.storageService.store(this.storageKey, histories);
      })
      .publishReplay(1);

    this.histories.connect();
    this.initHistory();
  }

  nextResult(result: SearchHistory): void {
    this.results.next(result);
  }

  // Ojo Check it later

  getHistories(): Observable<SearchHistory[]> {
    return this.histories as Observable<SearchHistory[]>;
  }

  reset(histories: SearchHistory[] = []) {
    this.resets.next(histories);
  }

  private initHistory(): void {
    const initialHistory = this.storageService.retrieve(this.storageKey);
    if (Array.isArray(initialHistory)) {
      this.reset(initialHistory);
    }
  }

}
