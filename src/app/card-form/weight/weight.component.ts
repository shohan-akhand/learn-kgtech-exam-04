import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css'],
})
export class WeightComponent {
  kg = 0;
  onInput = (event: Event) => {
    const value = parseFloat((<HTMLInputElement>event.target).value);
    this.kg = value;
  };

  cardForm = new FormGroup({
    weightInput: new FormControl('', [
      Validators.min(30),
      Validators.max(200),
      Validators.pattern('[0-9]+'),
    ]),
  });
}
