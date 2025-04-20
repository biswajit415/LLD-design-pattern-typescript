export class Document {
  private content: string = '';

  getContent(): string {
    return this.content;
  }

  append(text: string): void {
    this.content += text;
  }

  remove(length: number): string {
    const remove = this.content.slice(-length);
    this.content = this.content.slice(0, -length);
    return remove;
  }
}
