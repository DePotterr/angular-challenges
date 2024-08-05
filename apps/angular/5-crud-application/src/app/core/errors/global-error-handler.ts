import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: unknown): void {
    if (error instanceof HttpErrorResponse) {
      console.log(error.status);
      console.error('An http error occurred:', error);
      return;
    }
    console.error('An global error occurred:', error);
  }
}
