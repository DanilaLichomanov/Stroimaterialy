import {Component, Input} from '@angular/core';

// Input - принимаем значение из других компонентов, ViewChild - пользуемся #... - ссылка на HTML эл. в код ts
@Component({
  selector: 'app-add-catalog',
  templateUrl: './add-catalog.component.html',
  styleUrls: ['./add-catalog.component.css']
})
export class AddCatalogComponent {
  constructor() {}
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
  addCategory(dataProd: HTMLInputElement, dataCategory: HTMLInputElement) {
    if (dataCategory.value.toLowerCase() === 'салфетки') {
      this.categoryOneArr[this.categoryOneArr.length] = {nameProd: dataProd.value};
    } else if (dataCategory.value.toLowerCase() === 'кружки') {
      this.categoryTwoArr[this.categoryTwoArr.length] = {nameProd: dataProd.value};
    } else {
      console.log('Шот не так');
    }
  }

  // Удаление продукта
  deleteProd(indexProd: number) {
    this.categoryOneArr = this.categoryOneArr.filter((item, index) => index !== indexProd);
  }
}
