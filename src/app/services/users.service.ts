import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../model/userModel';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url: string = 'https://study-prs01-default-rtdb.europe-west1.firebasedatabase.app'

  constructor(private http: HttpClient) { }

  getUser(id: string) {
    return this.http.get(`${this.url}/users/${id}.json`);
  }

  getUsers() {
    return this.http.get(`${this.url}/users.json`).pipe(map(this.transformArray));
  }

  transformArray(usersObj: object | any) {
    const users: UserModel[] = [];

    if (!usersObj) { return; }

    Object.keys(usersObj).forEach(key => {
      users.push({ id: key, ...usersObj[key] })
    });
    return users;
  }

  createUser(user: UserModel) {
    const userTmp = { ...user }
    delete userTmp.id;
    return this.http.post(`${this.url}/users.json`, userTmp).pipe(map((resp: any) => {
      user.id = resp.name;
      return user;
    }))
  }

  updateUser(user: UserModel) {
    const userTmp = { ...user }
    delete userTmp.id;
    return this.http.put(`${this.url}/users/${user.id}.json`, userTmp);
  }

  deleteUser(user: UserModel) {
    return this.http.delete(`${this.url}/users/${user.id}.json`);
  }

}
