import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'techColor',
  standalone: true,
})
export class TechColorPipe implements PipeTransform {
  private colorMap: Record<string, string> = {
    Angular: '#DD0031',
    TypeScript: '#007ACC',
    HTML: '#E34F26',
    SCSS: '#C6538C',
    'GitHub Pages': '#000000',
    'GitHub Actions': '#2088FF',
    Prettier: '#1A2C37',
    Lint: '#4B32C3',
    Python: '#FFD343',
    'Turtle Graphics': '#00B894',
    Pandas: '#150458',
    Java: '#007396',
    jQuery: '#0769AD',
    SQL: '#CC2927',
    Android: '#3DDC84',
    'React Native': '#61DAFB',
    Arduino: '#00979D',
    'Raspberry Pi': '#A22846',
    LEGO: '#F6BE00',
  };

  transform(value: string): string {
    return this.colorMap[value] || '#888888';
  }
}
