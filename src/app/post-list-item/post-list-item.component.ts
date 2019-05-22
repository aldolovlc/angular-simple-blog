import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() title: string;
  @Input() created_at: Date;
  @Input() content: string;
  @Input() loveIts: number;

    upvote(){
    this.loveIts++;
  }

  downvote(){
    this.loveIts--;
  }

  constructor() { }

  ngOnInit() {
  }

}
