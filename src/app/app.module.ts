import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from '@app/app.component';
import {
  HeaderComponent,
  FooterComponent,
  MenuComponent
} from '@layout/index';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { SingleImageBoxComponent } from './layout/menu/components/single-image-box/single-image-box.component';
import { MultiImageBoxComponent } from './layout/menu/components/multi-image-box/multi-image-box.component';
import { ImageBoxComponent } from './layout/menu/components/image-box/image-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SingleImageBoxComponent,
    MultiImageBoxComponent,
    ImageBoxComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
