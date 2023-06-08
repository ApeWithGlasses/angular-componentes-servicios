import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isActiveMenu = false;
  counter = 0;

  //Inyectamos el servicio
  constructor(
    private storeService: StoreService
  ) { }


  // Utilizamos el servicio con ngOnInit, nos suscribimos al observable myCart$
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    });
  }

  toggleMenu() {
    this.isActiveMenu = !this.isActiveMenu;
  }
}
