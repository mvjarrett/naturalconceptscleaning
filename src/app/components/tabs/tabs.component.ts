import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @Input() homeStatus: boolean | undefined

  constructor() { }

  ngOnInit(): void {
    this.homeStatus = this.homeStatus
  }

}
