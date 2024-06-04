import { Component, Injector, OnInit, inject } from '@angular/core';
import { PostulationService } from '../../../core/services/postulation.service';
import { TableViewComponent } from '../../../shared/table-view.component';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { HistoryCallsEditorComponent } from './history-calls-editor/history-calls-editor.component';
import { ImportsModule } from '../../../shared/import';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-history-calls',
  standalone: true,
  imports: [
    CommonModule,
    ImportsModule,
  ],
  templateUrl: './history-calls.component.html',
  providers: [
    PostulationService,
    ConfirmationService,
    MessageService,
    DialogService
  ],
})
export class HistoryCallsComponent extends TableViewComponent<any> implements OnInit {

  ref: DynamicDialogRef | undefined;
  _selectedColumns: Column[] = [];
  columns: Column[] = [];

  constructor(
    injector: Injector,
  ) {
    super(injector);
  }

  postulationService = inject(PostulationService);
  confirmationService = inject(ConfirmationService);
  messageService = inject(MessageService);
  dialogService = inject(DialogService);

  override ngOnInit(): void {
    super.ngOnInit();

    this.columns = [
      { field: 'jobPositionName', header: 'Puesto de Trabajo' },
      { field: 'quantity', header: 'Nro. de Vacantes' },
      { field: 'requirements', header: 'Requisitos' },
      { field: 'companyName', header: 'Contratista' },
      { field: 'statusName', header: 'Estado' }
    ];

    this._selectedColumns = this.columns;
  }

  get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    this._selectedColumns = this.columns.filter((col) => val.includes(col));
  }

  override getListService(): Observable<any> {
    return this.postulationService.getOffersHistory(this.getCollectionQueryParams())
  }

  openDialog(id: any): void {
    console.log("first")
  }

  editProduct(model: any): void {
    this.ref = this.dialogService.open(HistoryCallsEditorComponent, {
      data: {
        model
      },
      width: '40%',
      header: 'EDITAR PRODUCTO',
      contentStyle: { overflow: 'auto' },
      draggable: true,
    });

    this.ref.onClose.subscribe((res: any) => {
      if (res) {
        this.messageService.add({ severity: 'info', summary: 'Product Edited', detail: res.jobPositionName });
        this.loadData();
      }
    });
  }

  addProduct(): void {
    this.ref = this.dialogService.open(HistoryCallsEditorComponent, {
      width: '40%',
      header: 'AGREGAR PRODUCTO',
      contentStyle: { overflow: 'auto' },
      draggable: true,
    });

    this.ref.onClose.subscribe((res: any) => {
      if (res) {
        this.messageService.add({ severity: 'info', summary: 'Product Add', detail: res.jobPositionName });
        this.loadData();
      }
    });
  }

  deleteProduct(product: any): void {
    this.confirmationService.confirm({
      message: '¿Esta seguro de eliminar ' + product.jobPositionName + '?',
      header: 'CONFIRMAR',
      icon: 'pi pi-info-circle custom-icon',
      accept: () => {
        this.loadData();
        //TODO: service to delete product
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Eliminado correctamente!', life: 3000 });
      }
    });
  }
}
