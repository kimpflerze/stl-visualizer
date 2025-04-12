import { Component, OnInit } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { DirectoryComponent } from "../directory/directory.component";
import { FileReadService } from '../service/file-reader.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-root',
	imports: [
		MatToolbar,
		DirectoryComponent,
		MatProgressBarModule,
	],
	providers: [
		FileReadService,
		HttpClient,
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
		
  	title = 'stl-collection-viewer';
	jsonDataResourcePath = "assets/resources.json"
	loading = true;
	fileReaderService: FileReadService;
	resourceData: any = null;

	constructor(fileReaderService: FileReadService) {
		this.fileReaderService = fileReaderService;
	}

	ngOnInit(): void {
		
		this.fileReaderService
			.readJsonFile(this.jsonDataResourcePath)
			.subscribe(result => {
				console.groupCollapsed("File Reader - Read Data")
				console.dir(result);
				console.log("\n")
				this.resourceData = result;
				console.log("Data now usable in application...")
				console.groupEnd();
				this.loading = false;
			});

	}

	getRootDirectoryName() {
		return Object.keys(this.resourceData)[0];
	}

	getRootDirectoryData() {
		return this.resourceData[this.getRootDirectoryName()];
	}


}
