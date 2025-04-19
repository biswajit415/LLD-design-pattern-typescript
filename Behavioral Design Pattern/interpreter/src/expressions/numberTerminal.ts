import { Context } from '../context';
import { IExpression } from '../interface/expression.interface';

export class NumberTerminalExpression implements IExpression {
  public value: string;

  constructor(value: string) {
    this.value = value;
  }

  interpret(Context: Context): number {
    return Context.get(this.value);
  }
}
