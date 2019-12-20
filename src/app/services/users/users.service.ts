import { Observable, of } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public get(): Observable<UserModel[]> {
    // return this.http.get<UserModel[]>('https://uitest.free.beeceptor.com/usernames').pipe(
    //   mergeMap((data: Iterable<any>) => data),
    //   map((dataItem: any) => new UserModel(dataItem)),
    //   toArray()
    // );

    const users: UserModel[] = [
      new UserModel({name: 'userA'}),
      new UserModel({name: 'userB'}),
      new UserModel({name: 'userC'}),
      new UserModel({name: 'userD'}),
      new UserModel({name: 'userE'})
    ];

    return of(users);
  }
}
