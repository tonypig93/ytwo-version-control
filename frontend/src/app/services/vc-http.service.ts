import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class VcHttpService {
    private headers = new Headers({'Content-Type': 'application/json'});
    public options = new RequestOptions({headers: this.headers});
    constructor(private http: Http) {}
    get(url: string) {
        return this.http.get(url)
        .map(res => res.json());
    }
    post(url: string, body: any = {}) {
        return this.http.post(url, body, this.options)
        .map(res => res.json());
    }
}
