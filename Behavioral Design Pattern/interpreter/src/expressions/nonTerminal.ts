import { Context } from '../context';
import { IExpression } from './../interface/expression.interface';

export class NonTerminal implements IExpression {
  left: IExpression;
  right: IExpression;
  operator: string;

  constructor(l: IExpression, r: IExpression, o: string) {
    this.left = l;
    this.right = r;
    this.operator = o;
  }
  interpret(Context: Context): number {
    const leftValue = this.left.interpret(Context);
    const rightVlaue = this.right.interpret(Context);
    switch (this.operator) {
      case '+':
        return leftValue + rightVlaue;
      case '*':
        return leftValue * rightVlaue;
      case '-':
        return leftValue - rightVlaue;
      default:
        return 0;
    }
  }
}
