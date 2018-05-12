import { Directive, HostListener, HostBinding,Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private eref: ElementRef, private renderer: Renderer) {}

  @HostBinding('dropdown-toggle') isOpen;

  @HostListener('click') toggleOpen(){
    this.isOpen.dropdown();
}


@HostListener('mouseenter') toggleClass(eventData: Event) {
//this.arow.to = 'glyphicon glyphicon-chevron-up'
this.renderer.setElementClass(this.eref.nativeElement, 'glyphicon.glyphicon-chevron-up', true);
}

@HostListener('mouseleave') toggleBack( eventData: Event) {
this.renderer.setElementClass(this.eref.nativeElement, 'glyphicon.glyphicon-chevron-down', true);
}



}
