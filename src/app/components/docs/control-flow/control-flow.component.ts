import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyntaxHighlightComponent } from '../../../shared/syntax-highlight/syntax-highlight.component';
import { ControlFlowCodeSnippets } from './control-flow-code-snippets';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule, SyntaxHighlightComponent],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {
  codeSnippets = ControlFlowCodeSnippets;

  isAdmin = true;
  simpleIfElseComponent = this.codeSnippets.simpleIfElse;
  
  toggleIsAdmin() {
    this.isAdmin = !this.isAdmin;
  }

  ingredientList = [
    {name: 'noodles', quantity: 1},
    {name: 'miso broth', quantity: 1},
    {name: 'egg', quantity: 2},
  ];

  emptyIngredientList() {
    if (this.ingredientList.length === 0) {
      this.ingredientList = [
        {name: 'noodles', quantity: 1},
        {name: 'miso broth', quantity: 1},
        {name: 'egg', quantity: 2},
      ];
      return;
    }
    this.ingredientList = []
    
  }

  ingredientsListComponent = this.codeSnippets.ingredientsList;
}
