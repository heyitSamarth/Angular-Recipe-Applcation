import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';
 
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.d-block') isOpen = false;
  @HostListener('click') toogleopen(){
    this.isOpen = !this.isOpen ;
  }

}