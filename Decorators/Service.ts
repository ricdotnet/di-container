import 'reflect-metadata';

export function Service() {
  return function (target) {

    // console.log('hi from service decorator...');
    // return new target();
    // console.log(Reflect.getMetadata('design:paramtypes', target));
  }
}
