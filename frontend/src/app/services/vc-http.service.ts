import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class VcHttpService {
    constructor(private http: Http) {}
    get(url: string, reqOpts?: RequestOptions) {
        return this.http.get(url);
    }
    post(url: string, reqOpts?: RequestOptions):Observable<any[]> {
        return this.http.post(url, {})
        .map(res => res.json());
    }
}