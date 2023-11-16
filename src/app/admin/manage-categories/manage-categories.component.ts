// manage-categories.component.ts
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-media',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.scss'],
})
export class ManageCategoriesComponent implements OnInit {
  categories: any[] = [];
  mainCategories: any[] = [];
  editingCategoryIndex: number | null = null;
  editedCategoryName: string = '';
  editedCategoryPhoto: string = '';
  editedCategoryParentId: string = '';
  newCategoryName: string = '';
  newCategoryPhoto: string = '';
  newCategoryParentId: string = '';

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.loadMainCategories()
  }
  addCategory() {
    const newCategory = {
      name: this.newCategoryName,
      photo: this.newCategoryPhoto,
      parentId: this.newCategoryParentId,
    };
    this.categoryService.addCategory(newCategory).subscribe(
      (response) => {
        console.log('Category added successfully:', response);
        this.loadCategories();
      },
      (error) => {
        console.error('Error adding category:', error);
      }
    );
  }

  editCategory(index: number): void {
    this.editingCategoryIndex = index;
    this.editedCategoryName = this.categories[index].name;
    this.editedCategoryPhoto = this.categories[index].photo;
    this.editedCategoryParentId = this.categories[index].parentId;
  }

  saveEditedCategory(index: number): void {
    const editedCategory = {
      id: this.categories[index].id,
      name: this.editedCategoryName,
      photo: this.editedCategoryPhoto,
      parentId: this.editedCategoryParentId,
    };

    this.categoryService.updateCategory(editedCategory).subscribe(
      () => {
        this.editingCategoryIndex = null;
        this.categories[index] = { ...this.categories[index], ...editedCategory };
      });
  }
  removeCategory(index: number) {
    const categoryId = this.categories[index].id;

    this.categoryService.deleteCategory(categoryId).subscribe(
      (response: any) => {
        this.loadCategories();
      });
  }

  cancelEditCategory() {
    this.editingCategoryIndex = null;
    this.editedCategoryName = '';
    this.editedCategoryPhoto = '';
    this.editedCategoryParentId = '';
  }

  cancelAddCategory() {
    this.newCategoryName = '';
    this.newCategoryPhoto = '';
    this.newCategoryParentId = '';
  }

    getSubcategories(parentId: string): any[] {
        return this.categories.filter(category => category.parentId === parentId);
    }

    filteredSubcategories: any[] = [];

    loadMainCategories() {
        this.categoryService.getMainCategories().subscribe(
            (response: any) => {
                this.mainCategories = response;
                this.loadCategories();
            });
    }

    loadCategories() {
        this.categoryService.getSubCategories().subscribe(
            (subResponse: any) => {
                this.categories = subResponse;
                this.updateFilteredSubcategories();
            });
    }

    updateFilteredSubcategories() {
        this.filteredSubcategories = this.categories.filter(category => {
            return this.mainCategories.some(mainCategory => mainCategory.id === category.parentId);
        });
    }

    editedMainCategoryName: string = '';
    editedMainCategoryPhoto: string = '';
    editingMainCategoryIndex: number = -1;

    editMainCategory(index: number): void {
        this.editingMainCategoryIndex = index;
        this.editedMainCategoryName = this.mainCategories[index].name;
        this.editedMainCategoryPhoto = this.mainCategories[index].photo;
    }

    saveEditedMainCategory(index: number): void {
        this.mainCategories[index].name = this.editedMainCategoryName;
        this.mainCategories[index].photo = this.editedMainCategoryPhoto;
        this.mainCategories[index].parentId = 'null';
        this.categoryService.updateCategory(this.mainCategories[index]).subscribe();
        this.editingMainCategoryIndex = -1;
    }

    cancelEditMainCategory(): void {
        this.editingMainCategoryIndex = -1;
    }


}
