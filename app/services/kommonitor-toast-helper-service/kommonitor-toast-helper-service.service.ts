import { Injectable, inject  } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class KommonitorToastHelperServiceService {

  private toastr = inject(ToastrService)

  constructor() { }

  displaySuccessToast(toastTitle: string, toastContent: string) {
    this.toastr.success(toastContent, toastTitle);
  }

  displayInfoToast(toastTitle: string, toastContent: string) {
    this.toastr.info(toastContent, toastTitle);
  }

  displayWarningToast(toastTitle: string, toastContent: string) {
    this.toastr.warning(toastContent, toastTitle);
  }

  displayErrorToast(toastTitle: string, toastContent: string) {
    this.toastr.error(toastContent, toastTitle);
  }

  // Upper-left positioned toasts
  displaySuccessToastUpperLeft(toastTitle: string, toastContent: string) {
    this.toastr.success(toastContent, toastTitle, { positionClass: "toast-top-left" });
  }

  displayInfoToastUpperLeft(toastTitle: string, toastContent: string) {
    this.toastr.info(toastContent, toastTitle, { positionClass: "toast-top-left" });
  }

  displayWarningToastUpperLeft(toastTitle: string, toastContent: string) {
    this.toastr.warning(toastContent, toastTitle, { positionClass: "toast-top-left" });
  }

  displayErrorToastUpperLeft(toastTitle: string, toastContent: string) {
    this.toastr.error(toastContent, toastTitle, { positionClass: "toast-top-left" });
  }

  // Upper-right positioned toasts
  displaySuccessToastUpperRight(toastTitle: string, toastContent: string) {
    this.toastr.success(toastContent, toastTitle, { positionClass: "toast-top-right" });
  }

  displayInfoToastUpperRight(toastTitle: string, toastContent: string) {
    this.toastr.info(toastContent, toastTitle, { positionClass: "toast-top-right" });
  }

  displayWarningToastUpperRight(toastTitle: string, toastContent: string) {
    this.toastr.warning(toastContent, toastTitle, { positionClass: "toast-top-right" });
  }

  displayErrorToastUpperRight(toastTitle: string, toastContent: string) {
    this.toastr.error(toastContent, toastTitle, { positionClass: "toast-top-right" });
  }
}
