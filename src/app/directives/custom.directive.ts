import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit {

  @Input() appCustom: any;

  constructor(private eleRef: ElementRef) {
    console.log(eleRef, this.appCustom, "ele");
    eleRef.nativeElement.style.background = this.appCustom
  }

  ngOnInit(): void {
    console.log(this.appCustom, "ele");
    this.eleRef.nativeElement.style.background = this.appCustom
  }



}
