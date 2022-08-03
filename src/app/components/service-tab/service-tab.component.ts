import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-service-tab',
  templateUrl: './service-tab.component.html',
  styleUrls: ['./service-tab.component.css']
})
export class ServiceTabComponent implements OnInit {
serviceHero = 'Service'
serviceTitle = 'We have something for all your needs!'
  constructor() { }
   tabToggle : true | undefined
  ngOnInit(): void {
 
  }

}
