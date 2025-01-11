import { Component } from "@angular/core";
import { FadeDirective } from "../../directives/fade.directive";
import { trigger, style, animate, transition } from '@angular/animations';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.scss"],
  standalone: true,
  imports: [ NgOptimizedImage,FadeDirective],
  
})
export class ResumeComponent {

}
