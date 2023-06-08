import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  img: string = '';


  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('img')
  set changeImage(newImg: string) {
    this.img = newImg;
    //console.log('change just image => ', this.img);
  }

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  @Input() alt:string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = "./assets/images/default.jpg";

  // counter = 0;
  // counterFunction: number | undefined;

  // constructor() {
  //   console.log('constructor', 'imageValue =>', this.img );
  // }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('ngOnChanges', 'imageValue =>', this.img );
  //   console.log('changes ', changes);
  // }

  // ngOnInit(): void {
  //   console.log('ngOnInit', 'image-value =>', this.img );
  //   this.counterFunction = window.setInterval(() => {
  //     this.counter += 1;
  //     console.log('Running counter.');
  //   }, 1000)
  // }

  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit');
  // }

  // ngOnDestroy() {
  //   console.log('ngOnDestroy');
  //   window.clearInterval(this.counterFunction);
  // }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    // console.log("Child log");
    this.loaded.emit(this.img);
  }
}
