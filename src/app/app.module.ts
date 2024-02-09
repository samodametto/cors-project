import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { InputPropertyComponent } from './input-property/input-property.component';

@NgModule ({
  imports: [
    MatSlideToggleModule,
    InputPropertyComponent
  ]
})
class AppModule {}
