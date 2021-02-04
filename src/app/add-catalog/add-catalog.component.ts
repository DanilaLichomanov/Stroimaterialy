import {Component} from '@angular/core';

export interface Category {
  name: string;
  subCategories: { name: string, quantity: number } [];
}

@Component({
  selector: 'app-add-catalog',
  templateUrl: './add-catalog.component.html',
  styleUrls: ['./add-catalog.component.css']
})

export class AddCatalogComponent {
  constructor() {
  }

  // Массив категорий
  categories = [
    {
      name: 'Отделочные материалы', subCategories: [
        {name: 'Гипсокартон и комплектующие', quantity: 1},
        {name: 'Листовые материалы', quantity: 1},
      ]
    },
    {
      name: 'Строительные материалы', subCategories: [
        {name: 'Блоки и кирпич', quantity: 1},
        {name: 'Металлопрокат', quantity: 1},
        {name: 'Полиматериалы', quantity: 1},
      ]
    },
  ];

  // Методы
  addCategory(categoryName: string, subCategoryName: string) {
    this.categories.forEach((category: Category) => {
      if (categoryName === category.name.toLowerCase()) {
        category.subCategories.push({name: subCategoryName, quantity: 1});
      }
    });
  }
}
