import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";

const socketConfig: SocketIoConfig = {
  options: {}, url: "http://localhost:3000/"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    importProvidersFrom(SocketIoModule.forRoot(socketConfig))
  ]
};
