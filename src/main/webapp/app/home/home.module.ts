import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ConfigKeyClockSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [ConfigKeyClockSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class ConfigKeyClockHomeModule {}
