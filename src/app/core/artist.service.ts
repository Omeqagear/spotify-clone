import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/expand';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { MarketService } from './market.service';
import { TokenService } from './token.service';
import { Artist } from '../models/artist';
import { map } from 'bluebird';
import { SimplifiedAlbum } from '../models/simplified-album';
import { PagingObject } from '../models/paging-object';
import { Track } from '../models/track';

@Injectable()
export class ArtistService {

  private next: string;

  constructor(
    private _http: Http,
    private marketService: MarketService,
    private tokenService: TokenService
  ) { }

  getArtist(id: string): Observable<Artist> {
    return this.tokenService
    .getAuthHeaders()
    .switchMap((headers) => this._http
    .get('https://api.spotify.com/v1/artists/${id}', { headers })
    .retry(5)
    .map((res: Response) => res.json() as Artist)
    .catch(() => Observable.of(null))
    );
  }

  getAlbums(id: string): Observable<SimplifiedAlbum[]> {
    const url = 'https://api.spotify.com/v1/artists/${id}/albums';
    const params = new URLSearchParams();
    params.set('album_type', 'album,single,compilation');
    params.set('limit', '50');
    params.set('offset', '0');
    this.next = null;

    return this.marketService
    .getCountryCode()
    .do((country) => params.set('market', country))
    .combineLatest(this.tokenService.getAuthHeaders(), (mkt, h) => h)
    .switchMap((headers) => this._http.get(url, {
      headers,
      search: params,
    }))
    .retry(5)
    .map((res: Response) => res.json() as PagingObject<SimplifiedAlbum>)
    .do((page) => this.next = page.next)
    .map((page) => page.items as SimplifiedAlbum[])
    .expand(() => this.next ? this.getNextAlbums() : Observable.empty() as Observable<SimplifiedAlbum[]>)
    .scan((acc: SimplifiedAlbum[], cur) => acc.concat(cur), [])
    .catch(() => Observable.of([]));
  }

  getRelatedArtist(id: string): Observable<Artist[]> {
    return this.tokenService
    .getAuthHeaders()
    .switchMap((headers) => this._http
      .get(`https://api.spotify.com/v1/artists/${id}/related-artists`, {
        headers,
      })
    .retry(5)
    .map((res: Response) => res.json().artists as Artist[])
    .catch(() => Observable.of([]))
    );
  }

  getTopTracks(id: string): Observable<Track[]> {
    return this.marketService
    .getCountryCode()
    .map((country) => {
      const params = new URLSearchParams();
      params.set('country', country);

      return params;
    })
    .combineLatest(this.tokenService.getAuthHeaders())
    .switchMap(([params, headers]: [URLSearchParams, Headers]) => {
      const url = `https://api.spotify.com/v1/artists/${id}/top-tracks`;
      return this._http.get(url, {headers, search: params});
    })
    .retry(5)
    .map((res: Response) => res.json() as Track[])
    .catch(() => Observable.of([]));
  }

  private getNextAlbums(): Observable<SimplifiedAlbum[]> {
    return this.tokenService
    .getAuthHeaders()
    .switchMap((headers) => this._http
      .get(this.next, { headers })
      .retry(5)
      .map((res: Response) => res.json() as PagingObject<SimplifiedAlbum>)
      .do((page) => this.next = page.next)
      .map((page) => page.items as SimplifiedAlbum[])
      .catch(() => Observable.of([]))
    );
  }

}
