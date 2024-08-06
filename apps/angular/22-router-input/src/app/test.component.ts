import { AsyncPipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <div>TestId: {{ testId() }}</div>
    <div>Permission: {{ permission() }}</div>
    <div>User: {{ user() }}</div>
  `,
})
export default class TestComponent {
  testId = input<string>('testId');
  permission = input<string>('permission');
  user = input<string>('user');
}
