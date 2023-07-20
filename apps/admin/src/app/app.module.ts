import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SharedCommonUiModule } from '@sky-devs/shared/common-ui';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, SharedCommonUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
