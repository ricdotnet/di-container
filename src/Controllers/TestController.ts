import 'reflect-metadata';
import { UserService } from "../Services/UserService";
import { Controller } from "../../Decorators/Controller";

@Controller()
export class TestController {

  constructor(public userService?: UserService) {}

  print() {
    this.userService.printUsername();
  }

}
