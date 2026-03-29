import React from 'react';
import { FileCode, X } from 'lucide-react';
import { FileNode } from '../FileTree';

interface EditorTabsProps {
  openFileIds: string[];
  activeFileId: string | null;
  files: FileNode[];
  onFileSelect: (id: string) => void;
  onFileClose: (id: string) => void;
}

export default function EditorTabs({
  openFileIds,
  activeFileId,
  files,
  onFileSelect,
  onFileClose
}: EditorTabsProps) {
  const openFiles = files.filter(f => openFileIds.includes(f.id));

  return (
    <div className="h-9 bg-[#252526] flex items-center overflow-x-auto scrollbar-hide shrink-0">
      {openFiles.map(file => (
        <div 
          key={file.id}
          onClick={() => onFileSelect(file.id)}
          className={`h-full flex items-center gap-2 px-3 border-r border-white/5 cursor-pointer text-xs transition-colors min-w-[120px] group ${
            activeFileId === file.id ? 'bg-[#1e1e1e] text-white border-t-2 border-slate-500' : 'bg-[#2d2d2d] text-slate-500 hover:bg-[#2a2d2e]'
          }`}
        >
          <FileCode size={14} className={activeFileId === file.id ? 'text-slate-500' : 'text-slate-500'} />
          <span className="truncate flex-1">{file.name}</span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onFileClose(file.id);
            }}
            className="p-0.5 hover:bg-white/10 rounded opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <X size={12} />
          </button>
        </div>
      ))}
    </div>
  );
}
