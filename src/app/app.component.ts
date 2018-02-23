import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: string;
  panelType: string;

  private isPreview(): boolean {
    return this.panelType === 'preview';
  }

  private switchPanelTypeToEditor(): void {
    this.panelType = 'editor';
  }

  private switchPanelTypeToPreview(): void {
    this.panelType = 'preview';
  }

  ngOnInit() {
    this.title = 'Picture Grid Application';
    this.panelType = 'preview';
  }
}
