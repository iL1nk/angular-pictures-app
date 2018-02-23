import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetPicturesService } from '../get-pictures.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-editor-mode',
  templateUrl: './editor-app.component.html',
  styleUrls: ['./editor-app.component.css']
})

export class EditorAppComponent implements OnInit {
  picturesList: Array<object>;

  urlFormControl = new FormControl('', [
    Validators.required,
    // Validators.pattern(/\//),
  ]);

  @Output() switchPreview = new EventEmitter();

  switchToPreviewMode() {
    this.switchPreview.emit();
  }

  editCurrentItem(index) {
    console.log(index);
  }

  isEdit(index) {
    return true;
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
