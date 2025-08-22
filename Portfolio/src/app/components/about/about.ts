import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
interface PersonalInfo {
  label: string;
  value: string;
  icon: string;
}

interface Achievement {
  title: string;
  description: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
  imports:[CommonModule]
})
export class AboutComponent implements OnInit {
  emailUrl: string = 'https://mail.google.com/mail/?view=cm&fs=1&to=abdelrahman.muhammad.kamal@gmail.com&su=Contact%20from%20Portfolio&body=Hi%20Abdelrahman,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0A';
  personalInfo: PersonalInfo[] = [
    {
      label: 'Name',
      value: 'Abdelrahman Muhammad Kamal',
      icon: 'fas fa-user'
    },
    {
      label: 'Location',
      value: 'Cairo, Egypt',
      icon: 'fas fa-map-marker-alt'
    },
    {
      label: 'Email',
      value: 'abdelrahman.muhammad.kamal@gmail.com',
      icon: 'fas fa-envelope'
    },
    {
      label: 'Phone',
      value: '+20 128 489 8660',
      icon: 'fas fa-phone'
    },
    {
      label: 'Languages',
      value: 'Arabic (Native), English (Proficient)',
      icon: 'fas fa-language'
    },
    {
      label: 'Military Status',
      value: 'Completed (2024)',
      icon: 'fas fa-shield-alt'
    }
  ];

  achievements: Achievement[] = [
    {
      title: 'ITI Graduate',
      description: '4-month intensive Full Stack .NET development program',
      icon: 'fas fa-graduation-cap',
      color: '#3498db'
    },
    {
      title: 'Team Leader',
      description: 'Led 5-member team for Autonomous Vehicle graduation project',
      icon: 'fas fa-users',
      color: '#e74c3c'
    },
    {
      title: 'Excellence Award',
      description: 'Achieved excellent grade in graduation project',
      icon: 'fas fa-trophy',
      color: '#f39c12'
    },
    {
      title: 'IoT Certified',
      description: 'Completed IoT Fundamentals training at NTI',
      icon: 'fas fa-wifi',
      color: '#9b59b6'
    }
  ];

  interests: string[] = [
    'Web Development',
    'Embedded Systems',
    'Problem Solving',
    'Team Collaboration',
    'Continuous Learning'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  downloadCV(): void {
    // Implement CV download logic
    console.log('Download CV clicked');
    // window.open('/assets/AbdelrahmanKamal_CV.pdf', '_blank');
  }

  openEmail(): void {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=abdelrahman.muhammad.kamal@gmail.com&su=Contact%20from%20Portfolio&body=Hi%20Abdelrahman,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0A', '_blank');
  }

  openLinkedIn(): void {
    window.open('https://linkedin.com/in/iamabdelrahmankamal', '_blank');
  }
}

