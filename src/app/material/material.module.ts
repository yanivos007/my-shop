import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarHarness} from '@angular/material/toolbar/testing';
@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatToolbarHarness, 
  ],
  exports: [],
})
export class MaterialModule {}
