import { MyInterface } from './MyInterface';

export class MyClass implements MyInterface {
  public add2(x: number): number {
    return x + 2;
  }
}