import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetPicturesService } from '../get-pictures.service';
import { PictureList } from '../picture-list-interface';

@Component({
  selector: 'app-preview-panel',
  templateUrl: './app-preview-panel.component.html',
  styleUrls: ['./app-preview-panel.component.css']
})

export class AppPreviewPanelComponent implements OnInit {
  pictureList: PictureList[];
  error: any;

  @Output() switchMode = new EventEmitter();

  switchToEditor() {
    this.switchMode.emit();
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
  }

}

