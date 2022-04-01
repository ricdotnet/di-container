import 'reflect-metadata';
import { Service } from "../../Decorators/Service";

@Service()
export class AnotherService {

  anotherService() {
    console.log('inside another service');
  }

}
