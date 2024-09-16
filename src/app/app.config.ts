import { ApplicationConfig,} from '@angular/core';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ErrorResponseInterceptor } from './shared/error-response.interceptor';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withFetch(), withInterceptors([ErrorResponseInterceptor]))]
};