import { Component } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.scss']
})
export class ManageCategoriesComponent {


  category = [
    {
      name: 'Smartphone',
      types:[ {name:'iphone'},
        {name:'samsung'}]
    },
    {
      name: 'Smartwaches',
      types:[ {name:'apple'},
        {name:'chinese'},
        {name:'vietnam'}]
    },
    {
      name: 'Laptot',
      types:[ {name:'iphone'},
        {name:'samsung'}]
    },


  ]

// Variables to handle new category and new product inputs
  newCategory: string = '';
  newProduct: string = '';

  // Variables for editing
  editingCategoryIndex: number | null = null;
  editingProductIndex: number | null = null;
  editedCategoryName: string = '';
  editedProductName: string = '';

  // Methods for category and product management
  addCategory() {
    if (this.newCategory) {
      this.category.push({ name: this.newCategory, types: [] });
      this.newCategory = '';
    }
  }

  removeCategory(index: number) {
    this.category.splice(index, 1);
  }

  editCategory(index: number) {
    this.editingCategoryIndex = index;
    this.editedCategoryName = this.category[index].name;
  }

  saveEditedCategory(index: number) {
    if (this.editedCategoryName) {
      this.category[index].name = this.editedCategoryName;
      this.editingCategoryIndex = null;
    }
  }

  addProduct(categoryIndex: number) {
    if (this.newProduct) {
      this.category[categoryIndex].types.push({ name: this.newProduct });
      this.newProduct = '';
    }
  }

  removeProduct(categoryIndex: number, productIndex: number) {
    this.category[categoryIndex].types.splice(productIndex, 1);
  }

  editProduct(categoryIndex: number, productIndex: number) {
    this.editingProductIndex = productIndex;
    this.editedProductName = this.category[categoryIndex].types[productIndex].name;
  }

  saveEditedProduct(categoryIndex: number, productIndex: number) {
    if (this.editedProductName) {
      this.category[categoryIndex].types[productIndex].name = this.editedProductName;
      this.editingProductIndex = null;
    }
  }

}
