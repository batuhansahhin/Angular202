import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModelDrivenComponent } from './components/model-driven/model-driven.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModelDrivenComponent],
  template: `
  <app-model-driven></app-model-driven>
  `,
})
export class AppComponent {
  title = 'Angular202';
}
