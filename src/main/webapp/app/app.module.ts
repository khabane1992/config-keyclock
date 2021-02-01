import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ConfigKeyClockSharedModule } from 'app/shared/shared.module';
import { ConfigKeyClockCoreModule } from 'app/core/core.module';
import { ConfigKeyClockAppRoutingModule } from './app-routing.module';
import { ConfigKeyClockHomeModule } from './home/home.module';
import { ConfigKeyClockEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ConfigKeyClockSharedModule,
    ConfigKeyClockCoreModule,
    ConfigKeyClockHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ConfigKeyClockEntityModule,
    ConfigKeyClockAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class ConfigKeyClockAppModule {}
