import { Component, Input, NgModule } from '@angular/core';
import {  CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.css'
})
export class IconButtonComponent {
  @Input() className: string = "";
  @Input() label: string = "";
  @Input() icon: string | null = null;
  @Input() targetId: string | null = null;

  scrollToTarget(): void {
    if(this.targetId) {
      const targetElement = document.getElementById(this.targetId);

      if(targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      } else {
        console.warn(`Element with the id "${this.targetId}" not found.`);
      }
    }
  }
}
