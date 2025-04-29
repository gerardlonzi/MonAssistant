import React from 'react'

export function Drag_Drog(){

    const [dragOver, setDragOver] = useState(false);
    const [droppedFiles, setDroppedFiles] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleDrop = (e) => {
        e.preventDefault();
        setDragOver(false);
        const files = e.dataTransfer.files;
        if (files.length > 0) {
          const file = files[0];
          setSelectedFile(file);
          setPreviewUrl(URL.createObjectURL(file));
          setDroppedFiles(files);
        }
      };
      
     
      
    const handleDragOver = (e) => {
      e.preventDefault();
      setDragOver(true);
    };
  
    const handleDragLeave = () => {
      setDragOver(false);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setSelectedFile(file);
          setPreviewUrl(URL.createObjectURL(file));
          setDroppedFiles([file]); // adapter l'affichage en liste
        }
      };
    
      
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-blue-50 file:text-blue-700
        hover:file:bg-blue-100"
      />

      {previewUrl && (
        <img
          src={previewUrl}
          alt="Preview"
          className="w-full h-60 object-cover rounded"
        />
      )}
      <div
        className={`w-96 h-48 border-4 border-dashed rounded-lg flex items-center justify-center cursor-pointer transition-colors ${
          dragOver ? "border-blue-500 bg-blue-100" : "border-gray-400"
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <p className="text-gray-600">Glissez un fichier ici</p>
      </div>

      {droppedFiles && (
        <div className="mt-4 text-sm text-gray-700">
          <p>Fichiers déposés :</p>
          <ul>
            {Array.from(droppedFiles).map((file, index) => (
              <li key={index}>📄 {file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    )
}