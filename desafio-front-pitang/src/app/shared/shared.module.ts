import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MessageComponent } from './components/message/message.component';
import { AgGridModule } from 'ag-grid-angular';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const components = [
  HeaderComponent,
  FooterComponent,
  MessageComponent,
];

const modules = [
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  FormsModule,
  ReactiveFormsModule,
  MatSnackBarModule,
  MatTabsModule,
  AgGridModule,
  MatSelectModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    ...modules,
  ],
  exports: [...components, ...modules]
})
export class SharedModule { }
