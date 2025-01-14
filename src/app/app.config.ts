import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { restInterceptor } from './core/interceptors/rest-interceptor.service';
import { ConfirmationService } from 'primeng/api'; // Asegúrate de importar ConfirmationService aquí


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([restInterceptor])),
    ConfirmationService,
  ]
};
