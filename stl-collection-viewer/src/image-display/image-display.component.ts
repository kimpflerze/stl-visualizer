import { Component, Input } from '@angular/core';

@Component({
	selector: 'image-display',
	templateUrl: './image-display.component.html',
	styleUrl: './image-display.component.scss'
})
export class ImageDisplayComponent {
  
	@Input() title!: string;
	@Input() imagePath!: string;

	replaceStlWithPng(value: string) {
		return "/assets/" + value.toLowerCase().replace(".stl", ".png")
	}

}