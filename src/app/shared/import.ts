// Import PrimeNG modules
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
    imports: [
        InputTextModule,
        MessageModule,
        TableModule,
        PaginatorModule,
        MultiSelectModule,
        ButtonModule,
        ToolbarModule,
        ToastModule,
        ConfirmDialogModule,
    ],
    exports: [
        InputTextModule,
        MessageModule,
        TableModule,
        PaginatorModule,
        MultiSelectModule,
        ButtonModule,
        ToolbarModule,
        ToastModule,
        ConfirmDialogModule,
    ],
})
export class ImportsModule { }
