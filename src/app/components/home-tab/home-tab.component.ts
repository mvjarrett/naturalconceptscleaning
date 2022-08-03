import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.css']
})
export class HomeTabComponent implements OnInit {
heroText= 'A natural clean for a healthy home.'
homeSubtext= 'We understand the importance of having a clean home without the harmful chemicals. At Natural Concepts, we are committed to providing high quality service, and we promise to only use eco-friendly and natural products. '
 @Output() homeStatus = true 
constructor() { }

  ngOnInit(): void {
    
  }

}
