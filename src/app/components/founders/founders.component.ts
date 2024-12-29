import {Component, OnInit} from '@angular/core';

interface Founder {
  photo: string;
  name: string;
  position: string;
  bio: string;
}

@Component({
  selector: 'app-founders',
  templateUrl: './founders.component.html',
  styleUrls: ['./founders.component.scss']
})
export class FoundersComponent implements OnInit {
  founders: Founder[] = [
    {
      photo: 'assets/images/founders/founder1.jpg',
      name: 'John Doe',
      position: 'CEO',
      bio: 'John has over 20 years of experience in the industry.'
    },
    {
      photo: 'assets/images/founders/founder2.jpg',
      name: 'Jane Smith',
      position: 'CTO',
      bio: 'Jane is a tech visionary leading our development team.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
