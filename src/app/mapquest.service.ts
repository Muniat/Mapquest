import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapquestService {

  constructor(private http: HttpClient) { }

  getDirections(from: string, to: string): Observable<any>{
    let url: string = 'http://www.mapquestapi.com/directions/v2/route?key=XUFLdHIaWDiFRqZD5uywtxOx3K3gqbx6&from='+encodeURI(from)+'&to='+encodeURI(to)+'&callback=JSONP_CALLBACK';
    return this.http
               .jsonp(url, 'jsoncallback') 
  }
}
