import { NgModule } from '@angular/core';
import { SeoService } from './seo.service';
import { Seo1Component } from './seo1/seo1.component';
import { Seo2Component } from './seo2/seo2.component';

@NgModule({
  declarations: [
    Seo1Component,
    Seo2Component,
  ],
  imports: [
  ],
  exports: [
  ],
  providers: [SeoService],
})
export class SeoModule { }
