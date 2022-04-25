import { NgModule } from '@angular/core';
import { UtilsComponent } from './utils.component';
import { ContainerComponent } from './components/container/container.component';



@NgModule({
  declarations: [
    UtilsComponent,
    ContainerComponent
  ],
  imports: [
  ],
  exports: [
    UtilsComponent
  ]
})
export class UtilsModule { }
