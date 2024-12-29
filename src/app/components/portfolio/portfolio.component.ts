import {Component, OnInit} from '@angular/core';

interface Project {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent  implements OnInit {
  projects: Project[] = [
    {
      image: 'assets/images/portfolio/dashboard.jpg',
      title: 'Dashboard Management System',
      description: 'A comprehensive dashboard to track and manage your business metrics effortlessly.'
    },
    {
      image: 'assets/images/portfolio/online-shop.jpg',
      title: 'E-Commerce Platform',
      description: 'An online shopping experience designed for seamless customer engagement and easy management.'
    },
    {
      image: 'assets/images/portfolio/dashboard.jpg',
      title: 'Analytics Dashboard',
      description: 'A powerful analytics dashboard for visualizing key performance indicators and insights.'
    },
    {
      image: 'assets/images/portfolio/dashboard.jpg',
      title: 'Task Management Tool',
      description: 'A streamlined platform for managing projects, tasks, and team collaboration efficiently.'
    },
    {
      image: 'assets/images/portfolio/online-shop.jpg',
      title: 'Retail Solutions App',
      description: 'A tailored solution for retailers to manage inventory, sales, and customer relationships.'
    },
    {
      image: 'assets/images/portfolio/dashboard.jpg',
      title: 'Financial Dashboard',
      description: 'An intuitive tool to monitor financial data and generate insightful reports for decision-making.'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }
}
