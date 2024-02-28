import React, { useEffect, useRef, useState } from 'react'

function ImageUpload() {
    const [files, setFiles] = useState<File[]>([]);
    const [dragActive, setDragActive] = useState<boolean>(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = e.target.files;
  
      if (selectedFiles && selectedFiles.length + files.length > 3) {
        alert("You can add only 3 images")
      } else if (selectedFiles) {
        setFiles((prevFiles) => [...prevFiles, ...Array.from(selectedFiles)]);
      }
    };
  
    const handleRemoveImage = (index: number) => {
      setFiles((prevFiles) => prevFiles.filter((file, i) => i !== index));
    };

    async function handleDrop(e: React.DragEvent<HTMLFormElement>) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            for (let i = 0; i < e.dataTransfer.files.length; i++) {
                setFiles((prevFiles:any) => [...prevFiles, e.dataTransfer.files[i]]);
            }
        }
    }
  
    function handleDragLeave(e: React.DragEvent<HTMLFormElement>) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
    }
  
    function handleDragOver(e: React.DragEvent<HTMLFormElement>) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    }

  return (
    <div>
        <div className="w-full">
            <form                   
            onDrop={handleDrop}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            >

            <label
                className={`flex justify-center w-full h-56 px-4 transition border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none ${dragActive ? "bg-white" : ""}`}>
                <span className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span className="font-medium text-gray-600">
                        <span className="text-blue-600 underline">Add Photos</span>
                        {" "}(Max-3)
                    </span>
                </span>
                <input type="file" accept="image/*" multiple name="file_upload" className="hidden" onChange={(e) => handleFileChange(e)} />
            </label>
            </form>
        </div>

        <div className="grid grid-cols-3 gap-3 place-items-center">
        {files &&
            files.length > 0 &&
            files.map((file: File, index: number) => (
            <div className="py-5 w-fit" key={index}>
                <div className="p-2 mt-5 flex justify-end">
                <button className="btn btn-sm btn-circle btn-ghost absolute bg-gray-50 hover:bg-gray-100 -mr-1 mt-3" onClick={() => handleRemoveImage(index)}>✕</button>
                </div>
                <div className="w-48 h-52">
                <img src={URL.createObjectURL(file)} alt={`Image ${index}`} className="h-full w-full object-cover rounded" />
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default ImageUpload