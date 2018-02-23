import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetPicturesService } from '../get-pictures.service';

@Component({
  selector: 'app-preview-panel',
  templateUrl: './app-preview-panel.component.html',
  styleUrls: ['./app-preview-panel.component.css']
})

export class AppPreviewPanelComponent implements OnInit {
  pictureList: Array<object> = [{
    pictureUrl: '',
    title: '',
    id: 0,
  }];

  @Output() switchMode = new EventEmitter();

  switchToEditor() {
    this.switchMode.emit();
  }

  constructor(private getPicService: GetPicturesService) { }

  private getImages() {
    // this.getPicService.getPictureList.subscribe(data => {
    //   this.pictureList = data;
    // })
    this.pictureList = this.getPicService.getPictureList();
  }

  ngOnInit() {
    this.getImages();
  }

}

