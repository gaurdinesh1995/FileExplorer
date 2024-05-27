import React from 'react';

interface FileSystemItem {
  name: string;
  type: 'file' | 'folder';
  children?: FileSystemItem[];
}

interface FileExplorerProps {
  data: FileSystemItem[];
}

const FileExplorer: React.FC<FileExplorerProps> = ({ data }) => {
  const handleClick = (item: FileSystemItem) => {
    if (item.type === 'folder') {
      // Navigate to the selected folder
    } else {
      // Open the selected file
    }
  };

  const renderFileSystem = (items: FileSystemItem[]) => {
    return items.map((item, index) => (
      <div key={index} onClick={() => handleClick(item)}>
        <span className={`icon ${item.type}`}>
          {item.type === 'folder' ? '📁' : '📄'}
        </span>
        <span>{item.name}</span>
        {item.children && renderFileSystem(item.children)}
      </div>
    ));
  };

  return <div className="file-explorer">{renderFileSystem(data)}</div>;
};

export default FileExplorer;