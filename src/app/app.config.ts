import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';

import { routes } from '../route/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
// import { MarkdownModule } from 'ngx-markdown';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideRouter(routes),
  provideClientHydration(),
  provideHttpClient(),
  importProvidersFrom(
    RouterModule.forRoot(routes, { useHash: true , scrollPositionRestoration: 'enabled' }),
    // MarkdownModule.forRoot()
  ), provideClientHydration()
  ]
};
