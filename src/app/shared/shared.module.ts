import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustopmPipePipe } from '../pipes/custopm-pipe.pipe';
import { CustomDirective } from '../directives/custom.directive';



@NgModule({
  declarations: [CustopmPipePipe, CustomDirective],
  imports: [
    CommonModule
  ],
  exports: [CustopmPipePipe]
})
export class SharedModule { }
