import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: string;
  panelType: string;

  ngOnInit() {
    this.title = 'Picture Grid Application';
    this.panelType = 'preview';
  }

  private isPreview(): boolean {
    return this.panelType === 'preview';
  }
}
