import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  link: string;
  githubLink: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
  imports: [CommonModule]
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
    {
      title: 'Airbnb-like Booking Platform',
      subtitle: 'ITI Graduation Project - Full Stack Web Application',
      description: 'Led the development of a comprehensive booking platform. The app features AI-powered search, secure Stripe payment integration, and a responsive UI/UX design. It showcases expertise in full-stack development and third-party API integration.',
      technologies: ['ASP.NET Core', 'Angular', 'SQL Server', 'RESTful APIs', 'Stripe', 'SignalR'],
      link: 'https://www.linkedin.com/posts/iamabdelrahmankamal_graduationproject-fullstackdevelopment-webdevelopment-activity-7359863648879620098-vl3_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC7JbgcBY_3kXYW0X0Ca1DrpPrEijj0naJw', // Placeholder link, replace with actual
      githubLink: 'https://github.com/IamAbdelrahman/Travellin' // Placeholder link
    },
    {
      title: 'School Management System',
      subtitle: 'ITI Training Project',
      description: 'Built a comprehensive school management platform using ASP.NET Core MVC and SQL Server. Implemented JWT-based authentication and role-based authorization for secure access. Features included managing students, teachers, courses, and departments. Designed with a responsive UI and structured backend for efficient data handling.',
      technologies: ['.NET Core', 'MVC', 'SQL Server', 'Entity Framework', 'C#', 'LINQ'],
      link: 'https://www.linkedin.com/posts/iamabdelrahmankamal_iti-aspnetcore-mvc-activity-7348086739959230466-DmSC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC7JbgcBY_3kXYW0X0Ca1DrpPrEijj0naJw', // Placeholder link, replace with actual
      githubLink: 'https://github.com/IamAbdelrahman/School_Management_System'
    },
    {
      title: 'Examination System App',
      subtitle: 'ITI Training Project',
      description: 'A web-based examination system that allows instructors to create and manage exams and students to take them. The project highlights skills in database management, form validation, and user authentication.',
      technologies: ['.NET Core', 'RESTful APIs', 'SQL Server', 'Entity Framework', 'C#'],
      link: 'https://www.linkedin.com/posts/iamabdelrahmankamal_angular-dotnetcore-sqlserver-activity-7351011847216463872-pfzv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC7JbgcBY_3kXYW0X0Ca1DrpPrEijj0naJw', // Placeholder link, replace with actual
      githubLink: 'https://github.com/IamAbdelrahman/Examination-System' // Placeholder link
    },
    {
      title: 'Multi-Actor E-Commerce App',
      subtitle: 'ITI Training Project',
      description: 'An E-commerce application built during my ITI training. It supports multiple user roles (admin, vendor, customer) and demonstrates a strong understanding of front-end and backend interactions, including client-side data storage.',
      technologies: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript', 'LocalStorage'],
      link: 'https://multi-actor-ecommerce.netlify.app/', // Placeholder link, replace with actual
      githubLink: 'https://github.com/IamAbdelrahman/Multi-Actor-E-Commerce-System' // Placeholder link
    },
    {
      title: 'Autonomous Warehouse Vehicle',
      subtitle: 'Faculty of Engineering - Graduation Project',
      description: 'A self-driving vehicle for warehouse environments, developed as part of my graduation project. The system utilizes machine learning and embedded systems to navigate and manage inventory efficiently. Achieved an "Excellent" grade.',
      technologies: ['Machine Learning', 'Embedded Systems', 'Atmega32', 'C', 'Raspberry Pi', 'Python', 'IoT'],
      link: 'https://github.com/Abdelrahman-Kamal-web-portfolio', // Placeholder link, replace with actual
      githubLink: 'https://github.com/IamAbdelrahman/Autonomous-Vehicle' // Placeholder link
    },
  
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
