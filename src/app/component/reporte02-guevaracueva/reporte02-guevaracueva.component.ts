import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-reporte02-guevaracueva',
  templateUrl: './reporte02-guevaracueva.component.html',
  styleUrl: './reporte02-guevaracueva.component.scss'
})
export class Reporte02GuevaracuevaComponent {
  lista: any[] = [];
  displayedColumns = ['djgcName', 'djgTotal'];
  dataSource = new MatTableDataSource<any>();

  constructor(private dataService: DataService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.dataService.getDataReport().subscribe({
      next: data => {
        this.dataSource.data = data;
      }
    });

  }
}
