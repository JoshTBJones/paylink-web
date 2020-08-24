import { Component, OnInit } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.sass']
})
export class FizzBuzzComponent implements OnInit {
  // fizz buzz results
  results: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.calculate(1, 20);
  }

  /**
   * User Input
   *
   * Takes the user submitted inputs and runs the calculate method to generate
   * a new list of Fizz's and Buzz'z.
   *
   * @param { string } start - User defined start number
   * @param { string } end - User defined end number
   */
  userInput(start: string, end: string): void {

    const startNumber: number = parseInt(start, 10);
    const endNumber: number = parseInt(end, 10);

    this.calculate(startNumber, endNumber);
  }

  /**
   * Calculate Fizz Buzz
   *
   * @param { number } start - Defaults to 1
   * @param { number } end - Defaults to 100
   */
  calculate(start: number = 1, end: number = 100): void {
    try {
      this.results = [];
      let i: number;
      let result: string;

      for (i = start; i <= end; i += 1) {
        result = '';

        if (this.__isDivisible(3, i)) {
          result += 'Fizz';
        }
        if (this.__isDivisible(5, i)) {
          result += 'Buzz';
        }
        if (!(this.__isDivisible(3, i) || this.__isDivisible(5, i))) {
          result = i.toString();
        }

        this.results.push(result);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  /**
   *  Is Divisible
   *
   * @param { number } divisor - The number the dividend will be divided by
   * @param { number } dividend - The number to be divided
   * @returns { boolean }
   */
  private __isDivisible(divisor: number, dividend: number): boolean {
    if (divisor === 0) { throw new Error ('You cannot divide by zero'); }

    if (!(dividend % divisor))
    {
      return true;
    }

    return false;
  }

}
