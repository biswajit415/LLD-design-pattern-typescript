import { Context } from './context';
import { NonTerminal } from './expressions/nonTerminal';
import { NumberTerminalExpression } from './expressions/numberTerminal';

const context = new Context();
/**
 *  (A+B)*(C-D)
 * (1+2) * (3-4)
 */

context.put('a', 1);
context.put('b', 2);
context.put('c', 3);
context.put('d', 4);

const A = new NumberTerminalExpression('a');
const B = new NumberTerminalExpression('b');
const C = new NumberTerminalExpression('c');
const D = new NumberTerminalExpression('d');

const epressionSum = new NonTerminal(A, B, '+');
const epressionSubstract = new NonTerminal(C, D, '-');

const expressionMultiply = new NonTerminal(
  epressionSum,
  epressionSubstract,
  '*'
);

console.log(expressionMultiply.interpret(context));
