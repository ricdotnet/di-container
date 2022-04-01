import 'reflect-metadata';

import { Container } from "./Decorators/Container";
import { TestController } from "./src";
import { SecondController } from "./src/Controllers/SecondController";

// const container = new Container();

// const testController = container.getService<TestController>(TestController);
// const testController = Container.getService<TestController>(TestController);
// testController.print();

// const t = new TestController();
// t.print();

const controller: TestController = Reflect.getMetadata('controller', TestController);
// const test: TestController = new controller();
const secondController: SecondController = Reflect.getMetadata('controller', SecondController)

controller.print();
secondController.someMethod();
