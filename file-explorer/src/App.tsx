import FileExplorer from "./components/FileExplorer/Index";
import { FileSystemItem } from "./models/Model";


function App() {
  const fileSystemData: FileSystemItem[] = [
    {
      name: 'Folder 1',
      type: 'folder',
      children: [
        { name: 'File 1', type: 'file' },
        { name: 'File 2', type: 'file' },
      ],
    },
    {
      name: 'Folder 2',
      type: 'folder',
      children: [{ name: 'File 3', type: 'file' }],
    },
    { name: 'File 4', type: 'file' },
  ];
  return (
    <FileExplorer data={fileSystemData} />
  );
}

export default App;
