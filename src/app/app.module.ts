import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';

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

import { AppPreviewPanelComponent } from './preview-app/app-preview-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    AppPreviewPanelComponent,
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
    // FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
