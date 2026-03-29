import React from 'react';
import { Files, Search, GitBranch, Box, Settings } from 'lucide-react';
import FileTree, { FileNode } from '../FileTree';

interface FileExplorerProps {
  files: FileNode[];
  activeFileId: string | null;
  onFileSelect: (file: FileNode) => void;
  onAddFile: (parentId: string | null) => void;
  onAddFolder: (parentId: string | null) => void;
  onDelete: (id: string) => void;
  onToggleFolder: (id: string) => void;
  activeSidebarTab: string;
  setActiveSidebarTab: (tab: any) => void;
}

export default function FileExplorer({
  files,
  activeFileId,
  onFileSelect,
  onAddFile,
  onAddFolder,
  onDelete,
  onToggleFolder,
  activeSidebarTab,
  setActiveSidebarTab
}: FileExplorerProps) {
  return (
    <div className="flex h-full bg-[#252526]">
      {/* Activity Bar */}
      <div className="w-12 bg-[#333333] flex flex-col items-center py-4 gap-4 shrink-0 border-r border-white/5">
        <button 
          onClick={() => setActiveSidebarTab('explorer')}
          className={`p-2 transition-colors ${activeSidebarTab === 'explorer' ? 'text-white border-l-2 border-slate-500' : 'text-slate-500 hover:text-slate-300'}`}
        >
          <Files size={24} />
        </button>
        <button 
          onClick={() => setActiveSidebarTab('search')}
          className={`p-2 transition-colors ${activeSidebarTab === 'search' ? 'text-white border-l-2 border-slate-500' : 'text-slate-500 hover:text-slate-300'}`}
        >
          <Search size={24} />
        </button>
        <button 
          onClick={() => setActiveSidebarTab('git')}
          className={`p-2 transition-colors ${activeSidebarTab === 'git' ? 'text-white border-l-2 border-slate-500' : 'text-slate-500 hover:text-slate-300'}`}
        >
          <GitBranch size={24} />
        </button>
        <button 
          onClick={() => setActiveSidebarTab('extensions')}
          className={`p-2 transition-colors ${activeSidebarTab === 'extensions' ? 'text-white border-l-2 border-slate-500' : 'text-slate-500 hover:text-slate-300'}`}
        >
          <Box size={24} />
        </button>
        <div className="mt-auto flex flex-col gap-4 pb-4">
          <button className="text-slate-500 hover:text-slate-300"><Settings size={24} /></button>
        </div>
      </div>

      {/* Explorer Content */}
      <div className="flex-1 overflow-y-auto">
        {activeSidebarTab === 'explorer' && (
          <FileTree 
            files={files}
            activeFileId={activeFileId}
            onFileSelect={onFileSelect}
            onAddFile={onAddFile}
            onAddFolder={onAddFolder}
            onDelete={onDelete}
            onToggleFolder={onToggleFolder}
          />
        )}
        {activeSidebarTab !== 'explorer' && (
          <div className="p-4 text-xs text-slate-500 uppercase tracking-widest font-bold">
            {activeSidebarTab} view
          </div>
        )}
      </div>
    </div>
  );
}
