import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IndexConcatPipe } from './index-concat.pipe';

@Component({
  standalone: true,
  imports: [NgFor, IndexConcatPipe],
  selector: 'app-root',
  template: `
    <div *ngFor="let person of persons; let index = index">
      {{ person | indexConcat: index }}
    </div>
  `,
})
export class AppComponent {
  persons = ['toto', 'jack'];
}
