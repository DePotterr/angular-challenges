import { provideToken } from '@angular-challenges/module-to-standalone/core/providers';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes), provideToken('main-shell-token')],
}).catch((err) => console.error(err));
