import { MyInterface } from './../shared/MyInterface';
import { MySharedClass } from './../shared/MySharedClass';

export class MyClass implements MyInterface {
  public add2(x: number): number {
    const randomNumber = new MySharedClass();
    return x + randomNumber.getRandomNumber() + 2;
  }
}