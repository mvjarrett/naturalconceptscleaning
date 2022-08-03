import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtext',
  templateUrl: './subtext.component.html',
  styleUrls: ['./subtext.component.css']
})
export class SubtextComponent implements OnInit {
@Input() subtext=''
  constructor() { }

  ngOnInit(): void {
  }

}
