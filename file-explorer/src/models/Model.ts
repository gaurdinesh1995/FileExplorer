export interface FileSystemItem {
    name: string;
    type: 'folder' | 'file';
    children?: FileSystemItem[];
  }