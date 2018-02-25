import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { MatButtonModule,
  MatFormFieldModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatToolbarModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GetPicturesService } from './get-pictures.service';
import { AppPreviewPanelComponent } from './preview-app/app-preview-panel.component';
import { EditorAppComponent } from './editor-app/editor-app.component';

@NgModule({
  declarations: [
    AppComponent,
    AppPreviewPanelComponent,
    EditorAppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [GetPicturesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
