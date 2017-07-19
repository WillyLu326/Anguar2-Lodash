import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChunkComponent } from './chunk/chunk.component';
import { CompactComponent } from './compact/compact.component';

@NgModule({
  declarations: [
    AppComponent,
    ChunkComponent,
    CompactComponent
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
