import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Post } from '../../classes/post';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  photoList: Post[] = [];
  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getPhotoList().subscribe((list: Post[]) => {
      this.photoList = list.slice(0, 20);
    });
  }

}
