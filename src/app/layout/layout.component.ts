import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-layout',
  imports: [
    HeaderComponent,
    CommonModule,
    SidebarComponent,
    SidebarComponent,
    ContentComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
