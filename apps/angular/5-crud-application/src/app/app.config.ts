import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  ErrorHandler,
  importProvidersFrom,
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalErrorHandler } from './core/errors/global-error-handler';
import { ErrorHandlerHttpInterceptor } from './core/interceptors/error-handler-http.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    importProvidersFrom(BrowserAnimationsModule),
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerHttpInterceptor,
      multi: true,
    },
  ],
};
