import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { CategoriesEffects, categoryFeature } from '@nx-workspace/category';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideStore(),
    provideState(categoryFeature),
    provideStoreDevtools({maxAge:25,logOnly: !isDevMode()}),
    provideEffects([CategoriesEffects])
  ],
};
