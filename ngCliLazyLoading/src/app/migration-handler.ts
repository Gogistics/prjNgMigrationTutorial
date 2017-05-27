import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CustomListModule } from './sub-components/custom-list/custom-list.module';
import { SiblingModule } from './sibling/sibling.module';
import { TRANSLATION } from '../i18n/messages.fr';

export class MigrationHandler {
  // bootstrap modules
  public bootstrapNgComponent(module: string) {
    // CustomListModule is declared in app.module.ts
    // SiblingModule is 
    let moduleDict: any = {
      listElem: CustomListModule,
      siblingElem: SiblingModule
    };

    let selectedModule = moduleDict[module];
    platformBrowserDynamic().bootstrapModule(
      selectedModule,
      {providers: [
        {provide: TRANSLATIONS, useValue: TRANSLATION},
        {provide:TRANSLATIONS_FORMAT, useValue:'xlf'},
        {provide:LOCALE_ID, useValue:'fr'}
      ]});
  }
}
