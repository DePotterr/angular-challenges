import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  output,
} from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { ListItemTemplateDirective } from '../../shared/directive/list-item-template.directive';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  standalone: true,
  imports: [NgTemplateOutlet, LetDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent {
  onUpdate = output();
  onDelete = output();

  @ContentChild(ListItemTemplateDirective)
  itemContentTemplate?: ListItemTemplateDirective;
}
