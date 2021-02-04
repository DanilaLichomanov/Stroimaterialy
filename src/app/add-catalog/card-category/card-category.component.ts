import { Component, Input } from '@angular/core';
import { Category } from '../add-catalog.component';

@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  styleUrls: ['./card-category.component.css']
})
export class CardCategoryComponent {
  @Input() thisCategory: Category;
}
