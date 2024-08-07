import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing.module';
import { NombreCompletoPipe } from '../../../shared/pipes/nombre-completo.pipe';
import { DialogsStudentsComponent } from './components/dialogs-students/dialogs-students.component';
import { StudentsComponent } from './students.component';
import { SharedModule } from '../../../shared/modules/shared-module/shared.module';

@NgModule({
  declarations: [
    StudentsComponent,
    DialogsStudentsComponent,
    NombreCompletoPipe
  ],
  exports: [StudentsComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule
  ]
})
export class StudentsModule { }