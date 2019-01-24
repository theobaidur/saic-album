import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Post } from '../../classes/post';
@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  postDetails: Post = null;
  constructor(private path: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    this.path.params.subscribe((params) => {
      this.httpService.getPhotoDetails(+params.id).subscribe((post: Post) => this.postDetails = post);
    });
  }

}
