import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-seo-2',
  templateUrl: './seo2.component.html',
  styleUrls: ['./seo2.component.scss'],
})
export class Seo2Component implements OnInit {

  constructor(
    private seoService: SeoService,
  ) {
  }

  ngOnInit() {
    this.seoService.setMetaData('SEO 2', 'The second seo test page.');
  }

}
