import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-hero',
  templateUrl: './image-hero.component.html',
  styleUrls: ['./image-hero.component.css'],
})
export class ImageHeroComponent implements OnInit {
  @Input() heroText = ''
  constructor() {}

  ngOnInit(): void {}
}
