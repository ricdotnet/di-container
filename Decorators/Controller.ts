import 'reflect-metadata';
import { Container } from "./Container";

export function Controller() {
  return function (target) {

    const controller = Container.getService<typeof target>(target);
    Reflect.defineMetadata('controller', controller, target);
  }
}
