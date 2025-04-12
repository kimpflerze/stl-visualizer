//Angular Modules
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {
	MatDialogModule,
	MatDialogActions,
	MatDialogClose,
	MatDialogContent,
	MatDialogTitle,
} from '@angular/material/dialog';

//Angular Material Modules
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {
	MatSnackBarModule,
} from '@angular/material/snack-bar';
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
import {provideHttpClient, withFetch } from '@angular/common/http';

// Custom Components
// import { NavbarComponent } from 'src/navbar/navbar.component';

// Services
// import { SomeService } from 'src/services/some.service';

@NgModule({
  declarations: [
    // AppComponent,
	// NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
	FormsModule,
	MatButtonModule,
	MatCardModule,
	MatGridListModule,
	MatInputModule,
	MatFormFieldModule,
	MatIconModule,
	MatToolbarModule,
	MatSlideToggleModule,
	MatDividerModule,
	ClipboardModule,
	MatMenuModule,
	MatSelectModule,
	MatDialogModule,
	MatDialogActions,
	MatDialogClose,
	MatDialogContent,
	MatDialogTitle,
	MatProgressSpinnerModule,
	MatSnackBarModule,
	MatChipsModule,
	MatTooltipModule,
	MatTabsModule,
	MatCheckboxModule,
	MatRadioModule,
	MatExpansionModule
  ],
  providers: [
	// SomeService,
	provideHttpClient(withFetch()),
  ],
  bootstrap: [/*AppComponent*/]
})
export class AppModule { }
