import { Editor } from './editor';

const editor = new Editor();
editor.addText('Hi');
editor.addText(' Team');
editor.deleteText(4);
editor.undo();
editor.redo();
