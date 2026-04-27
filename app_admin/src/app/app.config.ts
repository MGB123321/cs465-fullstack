import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideHttpClient} from '@angular/common/http';

import { routes } from './app.routes';
import { authInterceptProvider } from './utils/jwt.interceptor';

export const authInterceptProvider: Provider =
{ provide: HTTP_INTERCEPTORS,
useClass: JwtInterceptor, multi: true };

export const appConfig: ApplicationConfig = {
  providers: [
   importProvidersFrom(HttpClientModule),
    provideRouter(routes),
    provideHttpClient()
  ]
};
