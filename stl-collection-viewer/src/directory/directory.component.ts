import { Component, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { ImageDisplayComponent } from '../image-display/image-display.component';
import { ColorService } from '../service/color.service';
import { MatCard } from '@angular/material/card';

@Component({
	selector: 'directory',
	imports: [
		MatExpansionModule,
		MatCard,
		ImageDisplayComponent
	],
	templateUrl: './directory.component.html',
	styleUrl: './directory.component.scss'
})
export class DirectoryComponent implements OnInit {

	@Input() title: string = 'Default Title';
	@Input() data: any;
	@HostBinding('style.margin-top') marginTop: string = '16px';
	@HostBinding('style.background-color') backgroundColor: string = 'white';
	
	colorService: ColorService;

	constructor(colorService: ColorService, private renderer: Renderer2) {
		this.colorService = colorService;
	}

	ngOnInit(): void {
		console.groupCollapsed("Directory Component - OnInit");
		console.log("Title: " + this.title);
		console.dir(this.data);
		console.groupEnd();

		this.filterDirectories();
		this.filterSTLFiles();
		this.backgroundColor = this.colorService.getNextColor(5); //Percentage
	}

	filterDirectories() {
		const keys = Object.keys(this.data);
		var directories: any[] = [];
		for(let key in keys) {
			if(!keys[key].includes(".stl")) {
				directories.push({
					title: keys[key],
					directories: this.data[keys[key]]
				})
			}
		}

		return directories;
	}

	filterSTLFiles() {
		const keys = Object.keys(this.data);
		var stlFiles = [];
		for(let key in keys) {
			if(keys[key].includes(".stl")) {
				stlFiles.push(this.data[keys[key]]);
			}
		}

		return stlFiles;
	}

	getDirectoryName(directory: any) {
		return Object.keys(directory)[0];
	}

	getDirectoryData(directory: any) {
		return directory[this.getDirectoryName(directory)];
	}

	scrollToBottom(): void {
		window.scrollTo({
			top: document.body.scrollHeight,
			behavior: 'smooth'
		});
	}

}
