import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  links = [
    { name: 'Dashboard', path: ''},
    { name: 'Fizzbuzz', path: '../fizz-buzz'},
    { name: 'Fibonacci', path: '../fibonacci'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
