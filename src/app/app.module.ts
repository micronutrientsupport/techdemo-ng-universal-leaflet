import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapService } from './map.service';
import { SeoModule } from './components/seo/seo.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    SeoModule,
  ],
  providers: [MapService],
  bootstrap: [AppComponent],
})
export class AppModule { }
