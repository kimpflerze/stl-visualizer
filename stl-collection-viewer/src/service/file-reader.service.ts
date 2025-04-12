import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  	providedIn: 'root',
})
export class FileReadService {
  	constructor(private http: HttpClient) {}

	// Method to fetch the JSON file from the assets folder
	readJsonFile(filePath: string): Observable<any> {
		return this.http.get<any>(filePath); // Fetch the JSON file
	}
  
}