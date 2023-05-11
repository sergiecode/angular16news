import {
    bootstrapApplication,
    provideClientHydration,
  } from '@angular/platform-browser';
  
  ...
  
  bootstrapApplication(RootCmp, {
    providers: [provideClientHydration()]
  });