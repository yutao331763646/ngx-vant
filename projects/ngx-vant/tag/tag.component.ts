import { Component, OnInit } from '@angular/core';
export type TagType = 'default' | 'primary' | 'success' | 'danger';
export type TagSize = 'large' | 'medium';
export type TagProps = {
  type: TagType;
  size?: TagSize;
  mark?: boolean;
  color?: string;
  plain?: boolean;
  round?: boolean;
  textColor?: string;
  closeable?: boolean;
};
@Component({
  selector: 'van-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
