import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetPicturesService } from '../get-pictures.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-addnewitem',
  templateUrl: './app-addnewitem.component.html',
  styleUrls: ['./app-addnewitem.component.css']
})

export class AppAddnewitemComponent implements OnInit {
  @Output() cancelWindow: EventEmitter<boolean> = new EventEmitter<boolean>();

  picturesList: Array<object>;
  tempPictureObj: {
    pictureUrl: string,
    title: string,
  } = {
    pictureUrl: '',
    title: '',
  };

  urlFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/),
  ]);


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

  private saveNewItem() {
    if (this.checkIfNotEmpty(this.tempPictureObj)) {
      this.picturesList.push({
        pictureUrl: this.tempPictureObj.pictureUrl,
        title: this.tempPictureObj.title,
      });
    }

    this.closeLightBox();
  }

  private checkIfNotEmpty(object): boolean {
    return Object.keys(object).every(item => {
      return (typeof object[item] !== 'undefined') && (object[item].length);
    });
  }

  closeLightBox(): void {
    this.cancelWindow.emit(false);
  }

  constructor(private getPicService: GetPicturesService) { }

  private getImages() {
    this.picturesList = this.getPicService.getPictureList();
  }

  ngOnInit() {
    this.getImages();
  }

}
