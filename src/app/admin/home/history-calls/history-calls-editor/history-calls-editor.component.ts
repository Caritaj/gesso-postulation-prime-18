import { Component, Inject, Injector } from '@angular/core';
import { FormDialogComponent } from '../../../../shared/form-dialog.component';
import { Observable } from 'rxjs';
import { PostulationService } from '../../../../core/services/postulation.service';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { FormFields } from '../../../../shared/form-builder-helper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ImportsModule } from '../../../../shared/import';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-history-calls-editor',
  standalone: true,
  imports: [
    ImportsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DialogModule,
  ],
  templateUrl: './history-calls-editor.component.html',
  providers: [PostulationService],
})
export class HistoryCallsEditorComponent extends FormDialogComponent<any> {

  protected override formFields: FormFields = {
    id: {},
    jobPositionName: {
      required: true,
    },
    quantity: {
      required: true,
    },
    companyName: {
      minLength: 4,
      maxLength: 100,
    },
    statusName: {
      required: true,
      minLength: 4,
      maxLength: 100,
    },
  };

  override getSaveService(model: any): Observable<any> {
    throw new Error('Method not implemented.');
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  constructor(
    injector: Injector,
    dialogRef: DynamicDialogRef,
    @Inject(DynamicDialogConfig) public data: any,
    private service: PostulationService,
  ) {
    super(injector, dialogRef, data);
  }

  footer(): void {

  }
}
