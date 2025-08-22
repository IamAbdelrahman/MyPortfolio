import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ExperienceItem {
  title: string;
  subtitle: string;
  location: string;
  date: string;
  description: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrls: ['./experience.css'],
  imports: [CommonModule]
})
export class ExperienceComponent implements OnInit {

  experienceItems: ExperienceItem[] = [
    {
      title: 'Full Stack Web Development Using.Net',
      subtitle: 'ITI Intensive Training Program (ITP)',
      location: 'Tanta, Egypt',
      date: '03/2025 - 08/2025',
      description: [
        'Graduated from the 4-month comprehensive ITI Full Stack .NET Track, focused on developing full-stack web applications using modern .NET technologies.',
        'Developed full-stack apps using .NET Core, C#, SQL Server, Angular, and Bootstrap.',
        'Built multiple applications, including a Multi-Actor E-Commerce App and an Examination System App.'
      ]
    },
    {
      title: 'Bachelor\'s Degree in Communications and Electronics',
      subtitle: 'Faculty of Engineering, Tanta University',
      location: 'Tanta, Egypt',
      date: '09/2018 - 07/2023',
      description: [
        'Graduated with a grade of "Good" (73.5%).',
        'Led a team to design a self-driving warehouse vehicle using ML and embedded systems for the graduation project.',
        'Achieved a grade of "Excellent" for the graduation project.'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
