import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BucketComponent } from './bucket/bucket.component';
import { StageContainerComponent } from './stage-container/stage-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BucketComponent,
    StageContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
