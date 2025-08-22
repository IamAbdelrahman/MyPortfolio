import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  imports: [CommonModule, FormsModule]
})
export class ContactComponent implements OnInit {

  // Contact details from the resume
  email: string = 'abdelrahman.muhammad.kamal@gmail.com';
  phone: string = '+20 1284898660';
  location: string = 'Egypt, Cairo';
  socialLinks = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/iamabdelrahmankamal/' },
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/IamAbdelrahman' }
  ];

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor() { }

  ngOnInit(): void { }

  // A simple function to handle form submission
  onSubmit() {
    console.log('Form Submitted!', this.formData);
    // Here you would typically send this data to a backend service
    alert('Thank you for your message! I will get back to you shortly.');
  }
}
