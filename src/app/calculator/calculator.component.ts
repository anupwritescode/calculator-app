import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  grid: string[][] = [
    ['%', 'CE', 'C', '<-'],
    ['1/x', 'x2', 'sqrt(x)', '/'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['+/-', '0', '.', '=']
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
