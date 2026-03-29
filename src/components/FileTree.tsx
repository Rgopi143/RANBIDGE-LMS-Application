import React, { useState } from 'react';
import { 
  File, 
  Folder, 
  FolderOpen, 
  ChevronRight, 
  ChevronDown, 
  Plus, 
  FilePlus, 
  FolderPlus, 
  MoreVertical,
  Trash2,
  Edit2
} from 'lucide-react';

export interface FileNode {
  id: string;
  name: string;
  type: 'file' | 'folder';
  content?: string;
  parentId: string | null;
  isOpen?: boolean;
}

interface FileTreeProps {
  files: FileNode[];
  activeFileId: string | null;
  onFileSelect: (file: FileNode) => void;
  onAddFile: (parentId: string | null) => void;
  onAddFolder: (parentId: string | null) => void;
  onDelete: (id: string) => void;
  onToggleFolder: (id: string) => void;
}

export default function FileTree({ 
  files, 
  activeFileId, 
  onFileSelect, 
  onAddFile, 
  onAddFolder, 
  onDelete,
  onToggleFolder
}: FileTreeProps) {
  const renderTree = (parentId: string | null, level = 0) => {
    const nodes = files.filter(f => f.parentId === parentId).sort((a, b) => {
      if (a.type === b.type) return a.name.localeCompare(b.name);
      return a.type === 'folder' ? -1 : 1;
    });

    return nodes.map(node => (
      <div key={node.id}>
        <div 
          className={`group flex items-center gap-2 px-3 py-1 cursor-pointer transition-colors hover:bg-slate-800/50 ${
            activeFileId === node.id ? 'bg-slate-500/10 text-slate-400' : 'text-slate-400 hover:text-slate-200'
          }`}
          style={{ paddingLeft: `${level * 12 + 12}px` }}
          onClick={() => node.type === 'file' ? onFileSelect(node) : onToggleFolder(node.id)}
        >
          <div className="flex items-center gap-1.5 flex-1 min-w-0">
            {node.type === 'folder' ? (
              <>
                {node.isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                {node.isOpen ? <FolderOpen size={16} className="text-slate-500" /> : <Folder size={16} className="text-slate-500" />}
              </>
            ) : (
              <>
                <div className="w-3.5" /> {/* Spacer for alignment */}
                <File size={16} className="text-slate-500" />
              </>
            )}
            <span className="text-xs font-medium truncate">{node.name}</span>
          </div>

          <div className="hidden group-hover:flex items-center gap-1">
            {node.type === 'folder' && (
              <>
                <button 
                  onClick={(e) => { e.stopPropagation(); onAddFile(node.id); }}
                  className="p-1 hover:bg-slate-700 rounded"
                  title="New File"
                >
                  <FilePlus size={12} />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); onAddFolder(node.id); }}
                  className="p-1 hover:bg-slate-700 rounded"
                  title="New Folder"
                >
                  <FolderPlus size={12} />
                </button>
              </>
            )}
            <button 
              onClick={(e) => { e.stopPropagation(); onDelete(node.id); }}
              className="p-1 hover:bg-red-500/20 hover:text-red-400 rounded"
              title="Delete"
            >
              <Trash2 size={12} />
            </button>
          </div>
        </div>
        {node.type === 'folder' && node.isOpen && renderTree(node.id, level + 1)}
      </div>
    ));
  };

  return (
    <div className="py-2 select-none">
      <div className="flex items-center justify-between px-4 mb-2">
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Explorer</span>
        <div className="flex items-center gap-1">
          <button 
            onClick={() => onAddFile(null)}
            className="p-1 text-slate-500 hover:text-white hover:bg-slate-800 rounded transition-colors"
            title="New File at Root"
          >
            <FilePlus size={14} />
          </button>
          <button 
            onClick={() => onAddFolder(null)}
            className="p-1 text-slate-500 hover:text-white hover:bg-slate-800 rounded transition-colors"
            title="New Folder at Root"
          >
            <FolderPlus size={14} />
          </button>
        </div>
      </div>
      {renderTree(null)}
    </div>
  );
}
