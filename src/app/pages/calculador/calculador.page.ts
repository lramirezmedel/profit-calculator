import { Component, OnInit } from '@angular/core';
import { EmiterService } from 'src/app/services/emiter.service';

@Component({
  selector: 'app-calculador',
  templateUrl: './calculador.page.html',
  styleUrls: ['./calculador.page.scss'],
})
export class CalculadorPage implements OnInit {

  disabled: boolean;

  constructor(
    private emiter: EmiterService) {

      this.emiter.tab_ventas.subscribe((value: boolean) => {
        this.disabled = value;
      });

    }

  ngOnInit() {
  }

}
