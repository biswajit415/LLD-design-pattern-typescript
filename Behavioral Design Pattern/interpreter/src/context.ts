export class Context {
  public contextMap = new Map<string, number>();

  put(strVariable: string, setValue: number) {
    this.contextMap.set(strVariable, setValue);
  }

  get(strVariable: string): number {
    const value = this.contextMap.get(strVariable);
    if (value === undefined) {
      throw new Error(`Incorrect variable ${strVariable}`);
    }
    return value;
  }
}
