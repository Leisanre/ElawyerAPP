import { useCallback } from 'react';
import { Upload, File, X, Image as ImageIcon } from 'lucide-react';
import { Button } from '../../renderer/components/ui/Button';

interface DocumentUploadStepProps {
  data: {
    documents: Array<{
      name: string;
      path: string;
      type: string;
      size: number;
    }>;
  };
  onChange: (updates: any) => void;
}

export const DocumentUploadStep: React.FC<DocumentUploadStepProps> = ({
  data,
  onChange,
}) => {
  const handleFileSelect = useCallback(async () => {
    if (window.electronAPI) {
      const result = await window.electronAPI.selectFiles();
      if (result.success && result.files.length > 0) {
        const newFiles = result.files.map((file: any) => ({
          name: file.name,
          path: file.path,
          type: file.type,
          size: 0, // Will be populated by backend
        }));
        onChange({
          documents: [...data.documents, ...newFiles],
        });
      }
    }
  }, [data.documents, onChange]);

  const removeFile = (index: number) => {
    onChange({
      documents: data.documents.filter((_, i) => i !== index),
    });
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) {
      return <ImageIcon className="w-5 h-5 text-purple-500" />;
    }
    return <File className="w-5 h-5 text-blue-500" />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer">
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 bg-primary/10 rounded-full">
            <Upload className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">
              Upload Documents
            </h3>
            <p className="text-gray-600 text-sm">
              Drag and drop files here, or click to browse
            </p>
          </div>
          <Button variant="primary" onClick={handleFileSelect}>
            Select Files
          </Button>
          <p className="text-xs text-gray-500">
            Supports: PDF, DOCX, DOC, TXT, PNG, JPG (Max 50MB per file)
          </p>
        </div>
      </div>

      {/* File List */}
      {data.documents.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-700">
            Uploaded Files ({data.documents.length})
          </h4>
          {data.documents.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg group"
            >
              <div className="flex items-center gap-3">
                {getFileIcon(file.type)}
                <div>
                  <p className="font-medium text-gray-900">{file.name}</p>
                  <p className="text-sm text-gray-600">
                    {formatFileSize(file.size)}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeFile(index)}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      )}

      {/* Tips */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 mb-2">
          Tips for better results:
        </h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Include all relevant correspondence</li>
          <li>• Upload employment contracts if available</li>
          <li>• Include pay slips to verify compensation</li>
          <li>• Add any notices or memos related to the case</li>
        </ul>
      </div>
    </div>
  );
};
