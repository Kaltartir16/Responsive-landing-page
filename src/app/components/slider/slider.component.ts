import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  slides = [
    {
      image: 'assets/images/carousel/tech1.jpg',
      title: 'Innovation at Its Core',
      description: 'Revolutionizing Technology, Redefining Tomorrow"\n' +
        'Harness cutting-edge innovation to transform ideas into reality.',
    },
    {
      image: 'assets/images/carousel/tech2.jpg',
      title: 'Tailored Solutions',
      description: 'Custom Solutions for Your Digital Success"\n' +
        'Empowering businesses with scalable and reliable technology.',
    },
    {
      image: 'assets/images/carousel/tech3.jpg',
      title: 'Driving Growth',
      description: 'Technology That Drives Growth"\n' +
        'Accelerate your journey with solutions built for the future.',
    }
  ];
}
