import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.sass']
})
export class FibonacciComponent implements OnInit {

  //  Fibonacci number
  fn: number;

  // Fibonacci sequence
  fnSequence: number[];

  constructor() {
    this.fn = 0;
  }

  ngOnInit(): void {
  }

  /**
   * Get User Number
   * 
   * Takes user input and passes it to get number function.
   * 
   * @param { string } userIndex - User supplied input
   */
  getUserNumber(userIndex: string): void {
    let index: number = parseInt(userIndex, 10);

    this.getNumber(index);
  }

  /**
   * Get Fibonacci Number
   *
   * Gets the fibonacci number from the passed index.
   *
   * @param { number } index - the index to search to
   */
  getNumber(index: number = 10): void {
    // reset sequence array
    this.fnSequence = [];

    let previousFN: number = 0,
        currentFN: number = 0;

    // loop from 0 to index to build fibonacci sequence
    for (let i = 0; i <= index; i += 1) {
      const newFN: number = previousFN + currentFN;
      previousFN = currentFN;
      currentFN = newFN;

      // If current fibonacci number is zero, add 1 to previous to start
      // incrementing on next step.
      if (currentFN === 0) {
        previousFN += 1;
      }

      // Populate sequence for additional user feedback
      this.fnSequence.push(currentFN);
    }

    this.fn = currentFN;
  }

}
