import React, { useState } from 'react'
// import './Upload.css'

const Upload = () => {
  const [preview, setPreview] = useState(null)
  const [buttonsEnabled, setButtonsEnabled] = useState(false)
  const [fileName, setFileName] = useState('')
  const [userName, setUserName] = useState('')
  
  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setPreview(reader.result)
        setButtonsEnabled(true)
        setFileName(file.name)
      }
      reader.readAsDataURL(file)
    }
  }

  const resetPreview = () => {
    setPreview(null)
    setButtonsEnabled(false)
    setFileName('')
    setUserName('')
    document.getElementById('fileInput').value = ''
  }

  return (
    <div className="uplodemain">
    <div className="upload-container">
      <h2>Upload & Analyze X-ray Image</h2>

      {/* User Name Input */}
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      {/* File Upload */}
      <div className="upload-area" onClick={() => document.getElementById('fileInput').click()}>
        <p>Click to Browse or Drag & Drop an Image</p>
        <input type="file" id="fileInput" accept="image/*" onChange={handleFileChange} />
      </div>

      {/* Preview Section */}
      <div className="preview">
        {preview ? (
          <>
            <img src={preview} alt="Preview" />
            <p><strong>File Name:</strong> {fileName}</p>
          </>
        ) : (
          <p>No image uploaded yet.</p>
        )}
      </div>

      {/* Buttons */}
      <div className="button-group">
        <button disabled={!buttonsEnabled} onClick={() => alert(`Results for ${userName}`)}>
          View Results
        </button>
        <button disabled={!buttonsEnabled} onClick={() => alert(`Report generated for ${userName}`)}>
          Generate Report
        </button>
        <button onClick={resetPreview}>Reset</button>
      </div>
    </div>
    </div>
  )
}

export default Upload
