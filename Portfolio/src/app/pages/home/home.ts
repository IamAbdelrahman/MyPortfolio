import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header";
import { HeroComponent } from '../../components/hero/hero';
import { AboutComponent } from "../../components/about/about";
import { SkillsComponent } from "../../components/skills/skills";
import { ExperienceComponent } from '../../components/experience/experience';
import { ProjectsComponent } from "../../components/projects/projects";
import { ContactComponent } from "../../components/contact/contact";
import { FooterComponent } from "../../components/footer/footer";
@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HeroComponent, AboutComponent, SkillsComponent,
    ExperienceComponent, ProjectsComponent, ContactComponent, FooterComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
