import 'reflect-metadata';
import { Container } from "./Container";

export function injectable() {
  // const container = Container.getInstance();

  console.log('hi from injectable decorator?');
  // console.log(propertyKey);
  return function (constructor: Function) {
    console.log(constructor);
    Container.addService(constructor)
  }
}
