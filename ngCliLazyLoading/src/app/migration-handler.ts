import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CustomListModule } from './sub-components/custom-list/custom-list.module';

export class MigrationHandler {
  // bootstrap module
  public bootstrapNg2Component(module: string) {
    let moduleDict: any = {
      listElem: CustomListModule
    };

    let selectedModule = moduleDict[module];
    platformBrowserDynamic().bootstrapModule(selectedModule);
  }
}
