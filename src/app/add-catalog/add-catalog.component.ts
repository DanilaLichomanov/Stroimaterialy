import {Component} from '@angular/core';

<<<<<<< HEAD
export interface Category {
  name: string;
  subCategories: { name: string, quantity: number } [];
}

=======
>>>>>>> e116c9611d380eece8764d0aabca036aee43da27
@Component({
  selector: 'app-add-catalog',
  templateUrl: './add-catalog.component.html',
  styleUrls: ['./add-catalog.component.css']
})
<<<<<<< HEAD

=======
>>>>>>> e116c9611d380eece8764d0aabca036aee43da27
export class AddCatalogComponent {
  constructor() {
  }

<<<<<<< HEAD
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
=======
  // Переменные
  categoryValue = '';
  valueCategoryInp = '';
  // Массивы для категорий
  categoryOneArr = [
    {nameProd: 'Влажные'},
    {nameProd: 'Дешевые'}
  ];
  categoryTwoArr = [
    {nameProd: 'Для дома'},
    {nameProd: 'Для похода'}
  ];

  // Методы
  // Этот метод вызывается при взаимодействии с input для ПРОДУКТА
  onInput(event: any) {
    this.categoryValue = event.target.value;
    return this.categoryValue;
  }

  // Этот метод вызывается при взаимодействии с input для КАТЕГОРИИ
  twoInput(event: any) {
    this.valueCategoryInp = event.target.value;
    return this.categoryValue;
  }

  // На кнопке висит событие addCategory, чтобы добавить категорию, а текст в категории берется из инпута.

  addCategory() {
    if (this.valueCategoryInp.toLowerCase() === 'салфетки') {
      this.categoryOneArr[this.categoryOneArr.length] = {nameProd: this.categoryValue};
    } else if (this.valueCategoryInp.toLowerCase() === 'кружки') {
      this.categoryTwoArr[this.categoryTwoArr.length] = {nameProd: this.categoryValue};
    } else {
      console.log('Шот не так');
    }
  }
  // Удаление
 deleteProd(indexProd: number) {
    this.categoryOneArr = this.categoryOneArr.filter((item, index) => index !== indexProd);
 }

  deleteProdTwo(indexProd: number) {
    this.categoryTwoArr = this.categoryTwoArr.filter((item, index) => index !== indexProd);
>>>>>>> e116c9611d380eece8764d0aabca036aee43da27
  }
}
