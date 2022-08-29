import { NgModule } from "@angular/core";
import { MatIconRegistry } from '@angular/material/icon';

@NgModule()
export class NgxTestIconModule {
  constructor(iconRegistry: MatIconRegistry) {
    iconRegistry.setDefaultFontSetClass('a-font-set');
  }
}
