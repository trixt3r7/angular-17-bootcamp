import { SyntaxHighlight } from "../../../models/syntax-highlight.interface";

export class ControlFlowCodeSnippets
{
  static readonly simpleIfElse: SyntaxHighlight[] = 
  [
    {
      title: 'user-controls.component.html',
      language: 'xml',
      code: `@if (isAdmin) {
  <button>Erase database</button>
}
@else {
  <p>You are not authorized.</p>
}`
    },
    {
      title: 'user-controls.component.ts',
      language: 'typescript',
      code: `@Component({
  selector: 'user-controls',
  standalone: true,
  templateUrl: './user-controls.component.html',
  styleUrl: './user-controls.component.scss'
})
export class UserControls {
  isAdmin = true;
}`
    }
  ];

  static readonly ingredientsList: SyntaxHighlight[] = 
  [
    {
      title: 'ingredient-list.component.html',
      language: 'xml',
      code: `<ul>
  @for (ingredient of ingredientList; track ingredient.name) {
    <li>{{ ingredient.quantity }} - {{ ingredient.name }}</li>
  } 
  @empty {
    <li> There are no items. </li>
  }
</ul>`
    },
    {
      title: 'ingredient-list.component.ts',
      language: 'typescript',
      code: `@Component({
  standalone: true,
  selector: 'ingredient-list',
  templateUrl: './ingredient-list.component.html',
})
export class IngredientList {
  ingredientList = [
    {name: 'noodles', quantity: 1},
    {name: 'miso broth', quantity: 1},
    {name: 'egg', quantity: 2},
  ];
}`
    }
  ];



}