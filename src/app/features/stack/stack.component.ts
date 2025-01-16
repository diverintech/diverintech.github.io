import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.scss',
})
export class StackComponent {
  skills: { name: string; category: string }[] = [
    { name: 'Angular', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'HTML', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'CodeceptJS', category: 'Testing' },
    { name: 'Cypress', category: 'Testing' },
    { name: 'GitHub', category: 'Version Control' },
    { name: 'Jira', category: 'Project Management' },
    { name: '3D Printing', category: 'Prototyping' },
  ].sort((a, b) => {
    // Sort by category first
    if (a.category < b.category) return -1;
    if (a.category > b.category) return 1;
    // If categories are equal, sort by name
    return a.name.localeCompare(b.name);
  });
}
