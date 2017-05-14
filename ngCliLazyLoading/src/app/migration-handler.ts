import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CustomListModule } from './sub-components/custom-list/custom-list.module';
import { SiblingModule } from './sibling/sibling.module';

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
    platformBrowserDynamic().bootstrapModule(selectedModule);
  }
}
