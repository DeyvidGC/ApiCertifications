import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-reporte01-guevaracueva',
  templateUrl: './reporte01-guevaracueva.component.html',
  styleUrl: './reporte01-guevaracueva.component.scss'
})
export class Reporte01GuevaracuevaComponent {
  data: any[] = [];
  view: [number, number] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'X Axis';
  showYAxisLabel = true;
  yAxisLabel = 'Y Axis';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  colorSchemePC = "vivid";

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe((response: any[]) => {
      this.data = response.map(item => {
        return {
          name: item.djgcName,
          value: item.djgcCuantity
        };
      });
    });
  }

  onSelect(event: any) {
    console.log(event);
  }
}
