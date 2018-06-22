import { HackernewsApiService } from './../hackernews-api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-comments',
  templateUrl: './item-comments.component.html',
  styleUrls: ['./item-comments.component.scss']
})
export class ItemCommentsComponent implements OnInit {
  sub: any;
  item;

  constructor(
    private _hackernewsApiService: HackernewsApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let itemID = +params['id'];
      this._hackernewsApiService.fetchComments(itemID).subscribe(data => {
        this.item = data;
      }, error => console.log('Could not load item ' + itemID));
    });
  }
}
