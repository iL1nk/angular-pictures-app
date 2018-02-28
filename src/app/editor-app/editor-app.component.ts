import { Component, OnInit, Output, EventEmitter, NgModule, Input } from '@angular/core';
import { GetPicturesService } from '../get-pictures.service';
import {FormControl, Validators} from '@angular/forms';
import { PictureList } from '../picture-list-interface';

@Component({
  selector: 'app-editor-mode',
  templateUrl: './editor-app.component.html',
  styleUrls: ['./editor-app.component.css']
})

export class EditorAppComponent implements OnInit {
  pictureList: PictureList[];
  tempPictureObj: {
    pictureUrl: string,
    title: string,
    id: number
  } = {
    pictureUrl: '',
    title: '',
    id: 0,
  };
  error: any;

  chosenItem: number;
  isAddNewItemOpen: boolean;

  urlFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/),
  ]);

  @Output() switchPreview = new EventEmitter();

  closeAddNewWindow(message: boolean): void {
    this.isAddNewItemOpen = message;
  }

  private switchToPreviewMode(): void {
    this.switchPreview.emit();
  }

  private editCurrentItem(index): void {
    this.chosenItem = (this.chosenItem === index) ? null : index;
  }

  private isEdit(index): boolean {
    return index === this.chosenItem;
  }

  private resetItem(): void {
    this.chosenItem = null;
  }

  private saveValue($target) {
    const valueInput = $target.value,
      inputName = $target.name;

    if (valueInput.length) {
      if (inputName === 'pictureUrlInput') {
        this.tempPictureObj.pictureUrl = valueInput;
      } else {
        this.tempPictureObj.title = valueInput;
      }
    }
  }

  saveCurrentItemChanges(): void {
    const index = this.chosenItem;
    const pictureListItem = this.pictureList[index];
    if (this.checkIfNotEmpty(this.tempPictureObj)) {

      /*
      pictureListItem.pictureUrl = this.tempPictureObj.pictureUrl;
      pictureListItem.title = this.tempPictureObj.title;
      */

    this.getPicService.updatePicture(this.tempPictureObj)
      .subscribe(pictureItem => {
        const ix = pictureItem ? this.pictureList.findIndex(pic => pic.id === pic.id) : -1;
        if (ix > -1) {
          this.pictureList[ix] = pictureItem;
        }
      });

    this.resetItem();
    this.tempPictureObj = undefined;
    }
  }

  private checkIfNotEmpty(object): boolean {
    return Object.keys(object).every(item => {
      return (typeof object[item] !== 'undefined') && (object[item].length);
    });
  }

  private deleteSelectedItem(): void {
    const index = this.chosenItem;
    if ((typeof index !== 'undefined') && (index !== null)) {
      // this.pictureList.splice(index, 1);

      this.getPicService.deletePicture(index).subscribe();
    }
  }

  private addNewItem() {
    this.isAddNewItemOpen = true;
  }

  constructor(private getPicService: GetPicturesService) { }

  private getImages() {
    this.getPicService.getPictureList()
      .subscribe(
        data => { this.pictureList = data; },
        error => { this.error = error; }
      );
  }

  ngOnInit() {
    this.getImages();
    this.isAddNewItemOpen = false;
  }

}
