import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
  imports: [CommonModule]
})
export class FooterComponent implements OnInit {

  currentYear: number = new Date().getFullYear();

  socialLinks = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/iamabdelrahmankamal/' },
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/IamAbdelrahman' },
    {name: 'Email', icon: 'fas fa-envelope', 
    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=abdelrahman.muhammad.kamal@gmail.com&su=Contact%20from%20Portfolio&body=Hi%20Abdelrahman,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0A'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }
}
