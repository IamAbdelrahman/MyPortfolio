import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  items: string[];
  isProficient?: boolean;
}

interface SkillCategory {
  title: string;
  color: string;
  skills: {
    proficient: string[];
    familiar: string[];
  };
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrls: ['./skills.css'],
  imports: [CommonModule]
})
export class SkillsComponent implements OnInit {

  skillCategories: SkillCategory[] = [
    {
      title: 'Backend Development',
      color: '#3498db',
      skills: {
        proficient: [
          '.NET Core', 'ASP.NET', 'ADO.NET', 'RESTful APIs',
          'SQL Server', 'SignalR', 'LINQ', 'Entity Framework Core', 'Dapper'
        ],
        familiar: [
          'Microservices', 'Background Job Processing (Hangfire)',
          'Rate Limiting', 'RabbitMQ', 'Redis'
        ]
      }
    },
    {
      title: 'Frontend Development',
      color: '#27ae60',
      skills: {
        proficient: [
          'HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript (ES6)',
          'TypeScript', 'Angular'
        ],
        familiar: [
          'jQuery'
        ]
      }
    },
    {
      title: 'Programming Languages',
      color: '#f1c40f',
      skills: {
        proficient: [
          'C', 'C#', 'JavaScript', 'TypeScript', 'SQL'
        ],
        familiar: ['Python']
      }
    },
    {
      title: 'Architectures & Methodologies',
      color: '#8e44ad',
      skills: {
        proficient: [
          'N-Tier Architecture', 'Onion Architecture', 'Clean Architecture'
        ],
        familiar: [
          'Domain-Driven Design (DDD)', 'Vertical Slicing',
          'Agile (Scrum, Kanban)', 'Backlog'
        ]
      }
    },
    {
      title: 'Design Patterns & Object Mapping',
      color: '#c0392b',
      skills: {
        proficient: [
          'Repository', 'Service Layer', 'CQRS', 'Unit of Work',
          'Singleton', 'Factory', 'Dependency Injection', 'Observer',
          'Decorator', 'AutoMapper'
        ],
        familiar: [
          'Mapster', 'Mapperly'
        ]
      }
    },
    {
      title: 'DevOps & Cloud Tools',
      color: '#2c3e50',
      skills: {
        proficient: [
          'GitHub Actions', 'Postman', 'Swagger', 'Logging'
        ],
        familiar: [
          'Docker', 'Microsoft Azure', 'CI/CD Pipelines'
        ]
      }
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
