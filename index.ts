import 'reflect-metadata';

import { Container } from "./Decorators/Container";
import { TestController } from "./src";

// const container = new Container();

// const testController = container.getService<TestController>(TestController);
const testController = Container.getService<TestController>(TestController);
testController.print();
