import { useState, useRef } from "react";

function CreatePost() {
  const [files, setFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const inputRef = useRef(null);

  const handleFileChange = () => {
    const selectedFiles = Array.from(inputRef.current.files);
    setFiles(selectedFiles);

    const previews = selectedFiles.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    files.forEach((file, index) => {
      formData.append("recipe", file);
      formData.append("name", `Recipe Image ${index + 1}`);
    });

    try {
      const response = await fetch("/auth/recipe-images", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Images uploaded successfully");
      } else {
        console.error("Failed to upload images");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-50 flex justify-center mt-10 mr-50  p-50 dark:bg-gray-900">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              ref={inputRef}
              onChange={handleFileChange}
              multiple
            />
          </label>
          {imagePreviews.map((preview, index) => (
            <img
              key={index}
              src={preview}
              alt={`Preview ${index}`}
              className="mt-2 w-24 h-24 object-cover rounded-md"
            />
          ))}
          <input
            type="text"
            placeholder="Upload Picture                                                                  +"
            className="bg-gray-50 border border-black text-gray-900 sm:text-sm rounded-full  block w-full p-2.5 dark:bg-white-700 "
          />
          <input
            type="text"
            placeholder="Description"
            className="bg-gray-50 border border-black text-gray-900 sm:text-sm rounded-full  block w-full p-2.5 dark:bg-white-700 "
          />
          <input
            type="text"
            placeholder="Ingredients"
            className="bg-gray-50 border border-black text-gray-900 sm:text-sm rounded-full  block w-full p-2.5 dark:bg-white-700   "
          />
          <input
            type="text"
            placeholder="Instructions"
            className="bg-gray-50 border border-black text-gray-900 sm:text-sm rounded-full  block w-full p-2.5 dark:bg-white-700 "
          />
          <input
            type="text"
            placeholder="Cooking Time"
            className="bg-gray-50 border border-black text-gray-900 sm:text-sm rounded-full  block w-full p-2.5 dark:bg-white-700 "
          />
          <input
            type="text"
            placeholder="Shopping list URL"
            className="bg-gray-50 border border-black text-gray-900 sm:text-sm rounded-full  block w-full p-2.5 dark:bg-white-700 "
          />
          <button
            className=" bg-blue-600 border border-black text-white sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onClick={handleSubmit}
          >
            POST
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
