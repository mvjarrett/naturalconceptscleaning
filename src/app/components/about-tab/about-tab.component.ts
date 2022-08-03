import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-tab',
  templateUrl: './about-tab.component.html',
  styleUrls: ['./about-tab.component.css'],
})
export class AboutTabComponent implements OnInit {
  aboutSubtext =
    "We are a husband and wife team serving Meriwether, Troup, Harris, and Coweta areas. We believe cleaning doesn't have to involve harmful chemicals. There are thousands of chemicals in commonly used cleaning products and many have not been tested for safety, but many of the effects are known. These chemicals could pollute streams and rivers and may take a long time to degrade into harmless products. Some may not ever break down at all causing aquatic creatures to eat them and perhaps eventually be consumed by us. When absorbed through the skin, there are chances of these chemicals causing cancer and birth defects. We proudly follow the EWG ratings and are excited to offer this service to our area!";
  constructor() {}

  ngOnInit(): void {}
}
