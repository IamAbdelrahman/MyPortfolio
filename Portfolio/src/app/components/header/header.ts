import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  imports:[CommonModule]
})
export class HeaderComponent implements OnInit {
  
  isMenuOpen = false;
  isScrolled = false;
  activeSection = 'home';

  navItems = [
    { id: 'home', label: 'Home', icon: 'fas fa-home' },
    { id: 'about', label: 'About', icon: 'fas fa-user' },
    { id: 'skills', label: 'Skills', icon: 'fas fa-code' },
    { id: 'experience', label: 'Experience', icon: 'fas fa-briefcase' },
    { id: 'projects', label: 'Projects', icon: 'fas fa-folder-open' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.updateActiveSection();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Handle navbar background on scroll
    this.isScrolled = window.pageYOffset > 50;
    
    // Update active section based on scroll position
    this.updateActiveSection();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection = sectionId;
      this.isMenuOpen = false; // Close mobile menu after navigation
    }
  }

  private updateActiveSection(): void {
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
    
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          this.activeSection = sectionId;
          break;
        }
      }
    }
  }

  isActive(sectionId: string): boolean {
    return this.activeSection === sectionId;
  }
}