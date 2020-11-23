import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {
  //public usersTab: string[] = ["Toto", "Tata", "Titi"];
  public users: BehaviorSubject<string[]> = new BehaviorSubject([]);

  constructor () { }

  addUser(user: string) {
    this.users.value.push(user);
  }
}
