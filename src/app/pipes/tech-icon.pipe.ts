import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'techIcon',
  standalone: true,
})
export class TechIconPipe implements PipeTransform {
  private iconMap: Record<string, string> = {
    Angular: 'assets/icons/angular.png',
    TypeScript: 'assets/icons/typescript.png',
    HTML: 'assets/icons/html.png',
    SCSS: 'assets/icons/scss.png',
    'GitHub Actions': 'assets/icons/github-actions.png',
    Prettier: 'assets/icons/prettier.png',
    Eslint: 'assets/icons/eslint.png',
    Python: 'assets/icons/python.png',
    Pandas: 'assets/icons/pandas.png',
    Java: 'assets/icons/java.png',
    jQuery: 'assets/icons/jquery.png',
    MySQL: 'assets/icons/sql.png',
    Android: 'assets/icons/android.png',
    'React Native': 'assets/icons/react-native.png',
    Arduino: 'assets/icons/arduino.png',
    'Raspberry Pi': 'assets/icons/raspberry-pi.png',
    LEGO: 'assets/icons/lego.png',
    React: 'assets/icons/react.png',
    JavaScript: 'assets/icons/javascript.png',
  };

  transform(value: string): string {
    return this.iconMap[value] || 'assets/icons/default.png';
  }
}
