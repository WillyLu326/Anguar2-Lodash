import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChunkComponent } from './chunk/chunk.component';
import { CompactComponent } from './compact/compact.component';
import { ConcatComponent } from './concat/concat.component';

@NgModule({
  declarations: [
    AppComponent,
    ChunkComponent,
    CompactComponent,
    ConcatComponent
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
