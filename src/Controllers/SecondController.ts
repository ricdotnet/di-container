import 'reflect-metadata';
import { Controller } from "../../Decorators/Controller";
import { AnotherService } from "../Services/AnotherService";

@Controller()
export class SecondController {

  constructor(
    private secondService: AnotherService
  ) {
  }

  someMethod() {
    // console.log('inside second controller');
    this.secondService.anotherService();
  }

}
