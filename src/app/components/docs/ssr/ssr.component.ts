import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyntaxHighlightComponent } from '../../../shared/syntax-highlight/syntax-highlight.component';

@Component({
  selector: 'app-ssr',
  standalone: true,
  imports: [CommonModule, SyntaxHighlightComponent],
  templateUrl: './ssr.component.html',
  styleUrl: './ssr.component.scss'
})
export class SsrComponent {

  angularJson = `// With SSR
  "styles": [
      "src/styles.scss"
    ],
    "scripts": [],
    "server": "src/main.server.ts",
    "prerender": true,
    "ssr": {
      "entry": "server.ts"
    }
  },
  
  // No SSR
  "styles": [
      "src/styles.css"
    ],
    "scripts": []
  },`;

  tsConfigJson = `// With SSR
  "files": [
    "src/main.ts",
    "src/main.server.ts",
    "server.ts"
  ],

  // Without SSR
  "files": [
    "src/main.ts"
  ],`;

  codeDifference = `  // angular.json
  // tsconfig.app.json
  // server.ts [SSR Only] # application server
  // src/
  // ├── main.server.ts [SSR Only] # main server application bootstrapping
  // ├──── app/app.config.ts
  // ├──── app/app.config.server.ts [SSR Only] # server application configuration
   
  // With SSR
  import { ApplicationConfig } from '@angular/core';
  import { provideRouter } from '@angular/router';
  
  import { routes } from './app.routes';
  import { provideClientHydration } from '@angular/platform-browser';
  
  export const appConfig: ApplicationConfig = {
    providers: [
      provideRouter(routes), provideClientHydration(),
    ]
  };
  
  // No SSR
  import { ApplicationConfig } from '@angular/core';
  import { provideRouter } from '@angular/router';
  
  import { routes } from './app.routes';
  
  export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes)]
  };
  `;
}
