import 'reflect-metadata';
import { Service } from "../../Decorators/Service";

@Service()
export class UserService {

  printUsername() {
    console.log('username: ricdotnet');
  }

}
