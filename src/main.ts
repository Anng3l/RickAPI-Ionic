import { importProvidersFrom } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

import { provideFirestore, getFirestore } from "@angular/fire/firestore"
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { environment } from './environments/environment.prod';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(IonicModule.forRoot({})),
    provideHttpClient(),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.mifirebaseConfig)),
    provideFirestore(() => getFirestore()) 

  ],
});
