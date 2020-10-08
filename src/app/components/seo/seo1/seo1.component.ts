import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-seo-1',
  templateUrl: './seo1.component.html',
  styleUrls: ['./seo1.component.scss'],
})
export class Seo1Component implements OnInit {

  constructor(
    private seoService: SeoService,
  ) {
  }

  ngOnInit() {
    this.seoService.setMetaData('SEO 1', 'The first seo test page.');
  }

}
