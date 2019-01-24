import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../classes/post';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-thumbnail]',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('post') post: Post = null;
  constructor() { }

  ngOnInit() {}

}
