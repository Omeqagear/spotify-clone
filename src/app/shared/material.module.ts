// tslint:disable-next-line:eofline
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';

const materialModules: any = [
    MatInputModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
  ];
@NgModule({
    imports: materialModules,
    exports: materialModules
})
export class MaterialModule {}
