import { Component, inject } from '@angular/core';
import { KommonitorToastHelperServiceService } from 'services/kommonitor-toast-helper-service/kommonitor-toast-helper-service.service';

@Component({
  selector: 'app-kommonitor-toast-helper-component',
  templateUrl: './kommonitor-toast-helper-component.component.html',
  styleUrls: ['./kommonitor-toast-helper-component.component.css']
})
export class KommonitorToastHelperComponentComponent {
  private toastHelper = inject(KommonitorToastHelperServiceService)
  message: string = '';
  isOpen: boolean = false;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  showToast() {
    if (this.message.trim()) {
      this.toastHelper.displaySuccessToast('Notification', this.message);
      this.message = ''; // Clear input after showing toast
    }
  }

}
