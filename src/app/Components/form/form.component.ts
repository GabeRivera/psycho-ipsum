import { Component, OnInit } from '@angular/core';
import {GeneratorService} from '../../Services/generator.service';
import {StoreService} from '../../Services/store.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formModel = {
    paragraphs: 0,
  };

  constructor(private generator: GeneratorService, private store: StoreService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.store.setLatestResult(this.generator.generate(this.formModel.paragraphs));
  }
}
