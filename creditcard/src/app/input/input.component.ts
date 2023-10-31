import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() control: FormControl;
  constructor() { }
  ngOnInit(): void {
  }

}
