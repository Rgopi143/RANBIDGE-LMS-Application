const BACKEND_URL = 'http://localhost:8080/api';

export interface StorageResponse {
  message: string;
  fileName: string;
  url: string;
  error?: string;
}

class BackendService {
  /**
   * Uploads a file to the Spring Boot backend
   */
  async uploadFile(file: File): Promise<StorageResponse> {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(`${BACKEND_URL}/storage/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      return await response.json();
    } catch (error: any) {
      console.error('Backend upload error:', error);
      return {
        message: 'Upload failed',
        fileName: '',
        url: '',
        error: error.message
      };
    }
  }

  /**
   * Gets the full URL for a file stored on the backend
   */
  getFileUrl(fileName: string): string {
    return `${BACKEND_URL}/storage/files/${fileName}`;
  }
}

export const backendService = new BackendService();
