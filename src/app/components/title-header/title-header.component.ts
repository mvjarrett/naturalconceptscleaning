import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-header',
  templateUrl: './title-header.component.html',
  styleUrls: ['./title-header.component.css']
})
export class TitleHeaderComponent implements OnInit {
@Input() serviceTitle = ''
  constructor() { }

  ngOnInit(): void {
  }

}
