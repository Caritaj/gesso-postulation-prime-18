import { Component, Injector, OnInit } from '@angular/core';
import { TableViewComponent } from '../../../shared/table-view.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostulationService } from '../../../core/services/postulation.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-current-calls',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './current-calls.component.html',
  styleUrl: './current-calls.component.scss'
})
export class CurrentCallsComponent extends TableViewComponent<any> implements OnInit {

  constructor(
    injector: Injector,
    private router: Router,
    private service: PostulationService,
  ) {
    super(injector);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  override getListService(): Observable<any> {
    return this.service.getOffers(this.getCollectionQueryParams());
  }

  postulate() {
    this.router.navigate(['/login']);
  }

  openDialog(id: any): void {
    console.log("open dialog")
  }
}