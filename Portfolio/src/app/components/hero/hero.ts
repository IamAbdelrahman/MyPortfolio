
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  
  displayText = '';
  currentText = '';
  textIndex = 0;
  charIndex = 0;
  isDeleting = false;
  typeSpeed = 100;
  deleteSpeed = 50;
  delayBetweenTexts = 2000;

  texts = [
    'Full Stack .NET Developer',
    'Angular Specialist',
    'Problem Solver',
    'Code Enthusiast'
  ];

  private typingInterval: any;

  constructor() { }

  ngOnInit(): void {
    this.startTypingAnimation();
  }

  ngOnDestroy(): void {
    if (this.typingInterval) {
      clearTimeout(this.typingInterval);
    }
  }

  startTypingAnimation(): void {
    this.currentText = this.texts[this.textIndex];
    this.typeText();
  }

  typeText(): void {
    if (!this.isDeleting && this.charIndex < this.currentText.length) {
      // Typing
      this.displayText = this.currentText.substring(0, this.charIndex + 1);
      this.charIndex++;
      this.typingInterval = setTimeout(() => this.typeText(), this.typeSpeed);
    } else if (this.isDeleting && this.charIndex > 0) {
      // Deleting
      this.displayText = this.currentText.substring(0, this.charIndex - 1);
      this.charIndex--;
      this.typingInterval = setTimeout(() => this.typeText(), this.deleteSpeed);
    } else if (!this.isDeleting && this.charIndex === this.currentText.length) {
      // Finished typing, wait then start deleting
      this.typingInterval = setTimeout(() => {
        this.isDeleting = true;
        this.typeText();
      }, this.delayBetweenTexts);
    } else if (this.isDeleting && this.charIndex === 0) {
      // Finished deleting, move to next text
      this.isDeleting = false;
      this.textIndex = (this.textIndex + 1) % this.texts.length;
      this.currentText = this.texts[this.textIndex];
      this.typingInterval = setTimeout(() => this.typeText(), this.typeSpeed);
    }
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  downloadCV(): void {
    // You can implement CV download logic here
    console.log('Download CV clicked');
    window.open('https://drive.google.com/file/d/1HD5OPVuvAjfK6EDb6ZJuZtJ17-tkJdlI/view?usp=sharing', '_blank');
    // Example: window.open('/assets/AbdelrahmanKamal_CV.pdf', '_blank');
  }

  openProject(projectName: string): void {
    // Navigate to projects section and highlight specific project
    this.scrollToSection('projects');
    // You can add logic to highlight specific project
  }
}