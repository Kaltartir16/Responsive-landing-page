import {Component, OnInit} from '@angular/core';

interface Service {
  icon: string;
  title: string;
  description: string;
}


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent  implements OnInit {
  services: Service[] = [
    {
      icon: 'build',
      title: 'Development',
      description: 'We offer top-notch development services.'
    },
    {
      icon: 'design_services',
      title: 'Design',
      description: 'Creative and user-friendly designs.'
    },
    {
      icon: 'support',
      title: 'Support',
      description: '24/7 customer support.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
