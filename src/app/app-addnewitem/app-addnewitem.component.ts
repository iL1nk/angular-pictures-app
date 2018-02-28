import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetPicturesService } from '../get-pictures.service';
import {FormControl, Validators} from '@angular/forms';
import {PictureList} from '../picture-list-interface';

@Component({
  selector: 'app-addnewitem',
  templateUrl: './app-addnewitem.component.html',
  styleUrls: ['./app-addnewitem.component.css']
})

export class AppAddnewitemComponent implements OnInit {
  @Output() cancelWindow: EventEmitter<boolean> = new EventEmitter<boolean>();

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

      this.tempPictureObj.id = this.getPictureId();
    }
  }

  private getPictureId() {
    return this.pictureList.length + 1;
  }

  private saveNewItem() {
    if (this.checkIfNotEmpty(this.tempPictureObj)) {
      this.pictureList.push({
        pictureUrl: this.tempPictureObj.pictureUrl,
        title: this.tempPictureObj.title,
        id: this.tempPictureObj.id,
      });
    }

    this.closeLightBox();
  }

  private checkIfNotEmpty(object): boolean {
    return Object.keys(object).every(item => {
      return (object[item]) && (typeof object[item] !== 'undefined');
    });
  }

  closeLightBox(): void {
    this.cancelWindow.emit(false);
  }

  constructor(private getPicService: GetPicturesService) { }

  private getImages() {
    this.getPicService.getPictureList()
      .subscribe(
        data => { this.pictureList = data; },
        error => { this.error = error; }
      );
  }

  private saveNewPicture() {
    if (this.checkIfNotEmpty(this.tempPictureObj)) {
      this.getPicService.savePicture(this.tempPictureObj)
        .subscribe(
          newPicture => this.pictureList.push(newPicture)
        );

      this.closeLightBox();
    }
  }

  ngOnInit() {
    this.getImages();
  }
}
