import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { TokenService } from './token.service';
import { Album } from '../models/album';

@Injectable()
export class AlbumService {

  constructor(
    private _http: Http,
    private tokenService: TokenService) { }

    getById(id: string): Observable<Album> {
      return this.tokenService
      .getAuthHeaders()
      .switchMap((headers) => this._http
      .get(`https://api.spotify.com/v1/albums/${id}`, { headers })
      .retry(5)
      .map((res: Response) => res.json() as Album)
      .catch(() => Observable.of(null)),
    );
  }

}
