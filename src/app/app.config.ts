import { ApplicationConfig,} from '@angular/core';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ErrorResponseInterceptor } from './shared/error-response.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch(), withInterceptors([ErrorResponseInterceptor]))]
};