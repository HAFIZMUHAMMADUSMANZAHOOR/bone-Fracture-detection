import React, { useState } from 'react';

const Upload = () => {
  const [preview, setPreview] = useState(null);
  const [buttonsEnabled, setButtonsEnabled] = useState(false);
  const [fileName, setFileName] = useState('');
  const [userName, setUserName] = useState('');
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
        setButtonsEnabled(true);
        setFileName(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetPreview = () => {
    setPreview(null);
    setButtonsEnabled(false);
    setFileName('');
    setUserName('');
    document.getElementById('fileInput').value = '';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-800 p-4">
      <div className="w-full max-w-2xl bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl shadow-lg shadow-black/50 p-6 md:p-8 text-white">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6 text-center">
          Upload & Analyze X-ray Image
        </h2>

        {/* User Name Input */}
        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg border border-yellow-400 bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        {/* File Upload */}
        <div 
          className="w-full border-2 border-dashed border-yellow-400 p-6 md:p-8 text-center cursor-pointer rounded-xl bg-slate-700 hover:bg-slate-600 transition-colors duration-300 flex flex-col items-center justify-center mb-6"
          onClick={() => document.getElementById('fileInput').click()}
        >
          <p className="text-lg">Click to Browse or Drag & Drop an Image</p>
          <input 
            type="file" 
            id="fileInput" 
            accept="image/*" 
            onChange={handleFileChange} 
            className="hidden" 
          />
        </div>

        {/* Preview Section */}
        <div className="text-center mb-6">
          {preview ? (
            <div className="space-y-4">
              <img 
                src={preview} 
                alt="Preview" 
                className="max-w-full h-auto rounded-xl shadow-lg shadow-white/20 mx-auto"
              />
              <p className="text-slate-300">
                <strong className="text-yellow-400">File Name:</strong> {fileName}
              </p>
            </div>
          ) : (
            <p className="text-slate-400">No image uploaded yet.</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <button 
            disabled={!buttonsEnabled} 
            onClick={() => alert(`Results for ${userName}`)}
            className={`px-6 py-3 rounded-lg font-bold transition-colors ${buttonsEnabled ? 'bg-yellow-400 hover:bg-yellow-500 text-slate-900' : 'bg-slate-600 text-slate-400 cursor-not-allowed'}`}
          >
            View Results
          </button>
          <button 
            disabled={!buttonsEnabled} 
            onClick={() => alert(`Report generated for ${userName}`)}
            className={`px-6 py-3 rounded-lg font-bold transition-colors ${buttonsEnabled ? 'bg-yellow-400 hover:bg-yellow-500 text-slate-900' : 'bg-slate-600 text-slate-400 cursor-not-allowed'}`}
          >
            Generate Report
          </button>
          <button 
            onClick={resetPreview}
            className="px-6 py-3 rounded-lg font-bold bg-slate-700 hover:bg-slate-600 text-white transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;