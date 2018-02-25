import { Component, OnInit, Output, EventEmitter, NgModule } from '@angular/core';
import { GetPicturesService } from '../get-pictures.service';
import {FormControl, Validators} from '@angular/forms';
// import {ErrorStateMatc9her} from '@angular/material/core';

@Component({
  selector: 'app-editor-mode',
  templateUrl: './editor-app.component.html',
  styleUrls: ['./editor-app.component.css']
})

export class EditorAppComponent implements OnInit {
  picturesList: Array<object>;
  tempPictureObj: {
    picturesUrl: string,
    tooltip: string;
  };
  chosenItem: number;

  urlFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/),
  ]);

  @Output() switchPreview = new EventEmitter();

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

  private saveCurrentItemChanges(tempPictureObj): void {
    const index = this.chosenItem,
      pictureObj = this.picturesList[index];

    if (this.checkIfNotEmpty(tempPictureObj)) {
      pictureObj.picturesUrl = tempPictureObj.picturesUrl;
      pictureObj.tooltip = tempPictureObj.tooltip;
    }
  }

  private checkIfNotEmpty(object): boolean {
    Object.keys(object).every(item => {
      return typeof object[item] !== 'undefined';
    });
  }

  constructor(private getPicService: GetPicturesService) { }

  private getImages() {
    // this.getPicService.getPictureList.subscribe(data => {
    //   this.pictureList = data;
    // })
    this.picturesList = this.getPicService.getPictureList();
  }

  ngOnInit() {
    this.getImages();
  }

}
