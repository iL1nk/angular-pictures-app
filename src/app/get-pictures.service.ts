import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GetPicturesService {
  /*
  appPicturesObject = [{
      pictureUrl: 'https://c1.staticflickr.com/6/5611/15637859470_280a05c0cd_c.jpg',
      title: 'Picture 1',
      id: 1,
    },
    {
      pictureUrl: 'https://c1.staticflickr.com/6/5115/7393080644_bfc0e76154_b.jpg',
      title: 'Picture 2',
      id: 2,
    },
    {
      pictureUrl: 'https://c1.staticflickr.com/1/539/18494876499_011764713f_c.jpg',
      title: 'Picture 3',
      id: 3,
    },
    {
      pictureUrl: 'https://c1.staticflickr.com/3/2945/15174753880_6e47e7e4db_b.jpg',
      title: 'Picture 4',
      id: 4,
    },
    {
      pictureUrl: 'https://c1.staticflickr.com/9/8399/15620231427_de87e02a90_c.jpg',
      title: 'Picture 5',
      id: 5,
    },
    {
      pictureUrl: 'https://c1.staticflickr.com/4/3927/15414264002_76e338c6f2_h.jpg',
      title: 'Picture 6',
      id: 6,
    },
    {
      pictureUrl: 'https://c1.staticflickr.com/1/284/18936300468_3f0e084e51_b.jpg',
      title: 'Picture 7',
      id: 7,
    },
    {
      pictureUrl: 'https://c1.staticflickr.com/8/7185/6779983912_f98258c0bc_b.jpg',
      title: 'Picture 8',
      id: 8,
    },
    {
      pictureUrl: 'https://c1.staticflickr.com/8/7700/27804662036_f6f072cc16_b.jpg',
      title: 'Picture 9',
      id: 9,
    },
  ];
  */

  configUrl = 'assets/pictures-config.json';

  constructor(private http: Http) { }

  getPictureList() {
    return this.http.get(this.configUrl);
  }

  private extractListData(res: Response) {
    const body = res.json();
    return body.Search || {};
  }

  private extractItemData(res: Response) {
    const body = res.json();
    return body || {};
  }

  getPictures (searchUrl: string) {
    return this.http.get(searchUrl).map(this.extractListData);
  }

  getPicture (pictureURL: string) {
    return this.http.get(pictureURL).map(this.extractItemData);
  }

}
