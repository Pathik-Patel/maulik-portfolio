import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { FadeDirective } from "../../directives/fade.directive";
import { trigger, state, style, animate, transition } from '@angular/animations';
import { interval } from 'rxjs';
@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
  standalone: true,
  imports: [NgOptimizedImage, FadeDirective],
  animations: [
    trigger('textAnimation', [
      state('visible', style({
        opacity: 1
      })),
      state('hidden', style({
        opacity: 0
      })),
      transition('visible => hidden', [
        animate('0.3s')
      ]),
      transition('hidden => visible', [
        animate('0.3s')
      ])
      
    ]
    ),
    trigger('fadeInOut', [
      state('hidden', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      })),
      transition('hidden => visible', [
        animate('0.3s')
      ]),
      transition('visible => hidden', [
        animate('0.3s')
      ])
    ])
  ]
  
})
export class LandingComponent {

  textArray: string[] = ['Software Engineer', 'Full Stack Developer'];
  text: string = '';
  currentState: string = 'visible';
  captionVisible: boolean = false;

  showCaption(show: boolean) {
    this.captionVisible = show;
  }
ngOnInit(): void {
  // Initialize text
  this.text = this.textArray[0];

  // Create a timer to switch text every 4 seconds
  interval(4000).subscribe(() => {
    this.currentState = 'hidden';
    setTimeout(() => {
      const currentIndex = this.textArray.indexOf(this.text);
      const nextIndex = (currentIndex + 1) % this.textArray.length;
      this.text = this.textArray[nextIndex];
      this.currentState = 'visible';
    }, 100); // Wait for animation to complete before switching text
  });
}

  

}