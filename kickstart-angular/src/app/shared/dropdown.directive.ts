import { 
	Directive, 
	HostListener, 
	ElementRef, 
	Renderer2,
	HostBinding
} from '@angular/core';

@Directive({
	selector: '[appDropdown]'
})

export class DropdownDirective {
	@HostBinding('class.open') isToggled : boolean = false;

	@HostListener('click') open(eventData: Event) {
		this.isToggled = !this.isToggled;
	}

	constructor(private elRef: ElementRef, private renderer: Renderer2) {}
}