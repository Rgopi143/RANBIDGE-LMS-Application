import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      let errorMessage = 'An unexpected error occurred.';
      
      try {
        // Check if it's a Firestore permission error JSON
        if (this.state.error?.message) {
          const parsed = JSON.parse(this.state.error.message);
          if (parsed.error && parsed.operationType) {
            errorMessage = `Database error during ${parsed.operationType}: ${parsed.error}`;
          }
        }
      } catch (e) {
        // Not a JSON error, use default
        errorMessage = this.state.error?.message || errorMessage;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
          <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mx-auto">
              <AlertCircle size={32} />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-900">Something went wrong</h2>
              <p className="text-slate-500 text-sm">{errorMessage}</p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-slate-900 text-white rounded-xl py-3 font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
            >
              <RefreshCw size={18} />
              Reload Application
            </button>
          </div>
        </div>
      );
    }

    return <>{(this as any).props.children}</>;
  }
}
