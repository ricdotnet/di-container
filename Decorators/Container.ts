import 'reflect-metadata';

export class Container {

  static getService<T>(target: any): T {
    const dependencies = Reflect.getMetadata('design:paramtypes', target) || [];
    const injections = dependencies.map(token => this.getService<any>(token));

    return new target(...injections);
  }

}
