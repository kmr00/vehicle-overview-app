import {Injectable} from '@angular/core';
import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import {UserModel} from "../core/models/user.model";
import {Observable} from "rxjs";
import {USERS} from "../core/models/user.contants";

@Injectable({
  providedIn: 'root'
})
export class UserMockDataService implements InMemoryDbService {

  constructor() {
  }

  createDb() {
    return {users: USERS};
  }

  post(reqInfo: RequestInfo): Observable<any> {
    console.log(reqInfo)
    if (reqInfo.collectionName === 'login') {
      return this.handleLogin(reqInfo);
    }

    return reqInfo.utils.createResponse$(() => ({
      status: 404,
      body: {error: 'Collection not found'}
    }));
  }

  private handleLogin(reqInfo: RequestInfo): Observable<any> {
    const {username, password} = reqInfo.utils.getJsonBody(reqInfo.req);
    const db = reqInfo.utils.getDb() as { users: UserModel[] };

    if (db && db.users) {
      const user = db.users.find(u => u.username === username && u.password === password);
      if (user) {
        return reqInfo.utils.createResponse$(() => ({
          status: 200,
          body: {token: 'fake-jwt-token'}
        }));
      }
    }

    return reqInfo.utils.createResponse$(() => ({
      status: 401,
      body: {error: 'Invalid username or password'}
    }));
  }
}
