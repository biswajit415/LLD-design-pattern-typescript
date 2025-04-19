import { Context } from '../context';

export interface IExpression {
  interpret(Context: Context): number;
}
