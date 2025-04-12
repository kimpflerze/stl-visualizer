import { Injectable } from '@angular/core';

@Injectable({
  	providedIn: 'root',
})
export class ColorService {

	private currentHue: number = 0; // Starting with red (0 degrees)
	private saturation: number = 1;  // Full saturation
	private value: number = 1;       // Full brightness

	constructor() {}

	// Function to shift the hue by a percentage
	private shiftHue(percentage: number): number {
		// Shift the hue by the specified percentage and ensure it stays within [0, 360]
		this.currentHue = (this.currentHue + (percentage / 100) * 360) % 360;
		if (this.currentHue < 0) {
		this.currentHue += 360;
		}
		return this.currentHue;
	}

  	// Function to convert HSV to RGB
  	private hsvToRgb(h: number, s: number, v: number): string {
		var r, g, b;

		const i = Math.floor(h / 60);
		const f = h / 60 - i;
		const p = v * (1 - s);
		const q = v * (1 - f * s);
		const t = v * (1 - (1 - f) * s);

		switch (i) {
		case 0: [r, g, b] = [v, t, p]; break;
		case 1: [r, g, b] = [q, v, p]; break;
		case 2: [r, g, b] = [p, v, t]; break;
		case 3: [r, g, b] = [p, q, v]; break;
		case 4: [r, g, b] = [t, p, v]; break;
		case 5: [r, g, b] = [v, p, q]; break;
		default: break;
		}

		r = Math.round(r! * 255);
		g = Math.round(g! * 255);
		b = Math.round(b! * 255);

		return `rgb(${r}, ${g}, ${b})`; // Return RGB string
	}

	// Function to generate the next color and apply it to the background
	getNextColor(percentageShift: number): string {
		const newHue = this.shiftHue(percentageShift); // Shift hue by the given percentage
		const nextColorRgb = this.hsvToRgb(newHue, this.saturation, this.value); // Get RGB value
		return nextColorRgb;
	}
  
}

