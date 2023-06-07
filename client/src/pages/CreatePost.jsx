import { useState } from "react";
import axios from "axios";

function CreatePost() {
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  /* const [files, setFiles] = useState([]); */
  /* const [imagePreviews, setImagePreviews] = useState([]); */
  /* const inputRef = useRef(null); */
  /* const [ingredients, setIngredients] = useState([
    { name: "", quantity: "", unit: "" },
  ]); */
  const [instructions, setInstructions] = useState([
    { step: 1, description: "" },
  ]);

  /*   // Handles the images
  const handleFileChange = () => {
    const selectedFiles = Array.from(inputRef.current.files);
    setFiles(selectedFiles);

    const previews = selectedFiles.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  }; */

  /*  // Handles the ingredients
  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][field] = value;
    setIngredients(updatedIngredients);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { name: "", quantity: "", unit: "" }]);
  };

  const removeIngredient = (index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
  }; */

  // Handles the instructions
  const handleInstructionChange = (index, field, value) => {
    const updatedInstructions = [...instructions];
    updatedInstructions[index][field] = value;
    setInstructions(updatedInstructions);
  };

  const addInstruction = () => {
    const lastStep = instructions[instructions.length - 1].step;
    setInstructions([...instructions, { step: lastStep + 1, description: "" }]);
  };

  const removeInstruction = (index) => {
    const updatedInstructions = [...instructions];
    updatedInstructions.splice(index, 1);
    setInstructions(updatedInstructions);
  };

  // Handles the Cooking time
  const handleDurationChange = (e) => {
    const { name, value } = e.target;
    setDuration((prevDuration) => ({
      ...prevDuration,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:3001/post/create-post", {
        description,
        duration,
        instructions,
      });

      console.log("Created poste successfully");
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  return (
    <div className="bg-gray-50 flex justify-center mt-10 mr-50  p-50 dark:bg-gray-900">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          {/* <div className="flex flex-row overflow-x-auto justify-start">
            {imagePreviews.map((preview, index) => (
              <div key={index} className="flex-shrink-0 w-40 h-40 mx-2">
                <img
                  src={preview}
                  alt={`Preview ${index}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              ref={inputRef}
              onChange={handleFileChange}
              multiple
            />
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-6 h-6 mb-3 text-gray-400"
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
          </label> */}
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-gray-50 border border-black text-gray-900 sm:text-sm rounded-full  block w-full p-2.5 dark:bg-white-700 "
          />
          {/* {ingredients.map((ingredient, index) => (
            <div className="flex items-center space-x-2" key={index}>
              <input
                type="text"
                placeholder="Ingredient"
                className="bg-gray-50 border border-black text-gray-900 sm:text-sm rounded-full block w-1/2 p-2.5 dark:bg-white-700"
                value={ingredient.name}
                onChange={(e) =>
                  handleIngredientChange(index, "name", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Quantity"
                className="bg-gray-50 border border-black text-gray-900 sm:text-sm rounded-full block w-1/4 p-2.5 dark:bg-white-700"
                value={ingredient.quantity}
                onChange={(e) =>
                  handleIngredientChange(index, "quantity", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Unit"
                className="bg-gray-50 border border-black text-gray-900 sm:text-sm rounded-full block w-1/4 p-2.5 dark:bg-white-700"
                value={ingredient.unit}
                onChange={(e) =>
                  handleIngredientChange(index, "unit", e.target.value)
                }
              />
              {index === ingredients.length - 1 && (
                <button
                  type="button"
                  onClick={addIngredient}
                  className="text-gray-500 hover:text-gray-700 text-3xl"
                >
                  +
                </button>
              )}
              {index !== ingredients.length - 1 && (
                <button
                  type="button"
                  onClick={() => removeIngredient(index)}
                  className="text-gray-500 hover:text-gray-700 text-3xl"
                >
                  -
                </button>
              )}
            </div>
          ))} */}
          {instructions.map((instruction, index) => (
            <div className="flex items-center space-x-2" key={index}>
              <span className="text-white">{instruction.step}. </span>
              <input
                type="text"
                placeholder="Instruction"
                className="bg-gray-50 border border-black text-gray-900 sm:text-sm rounded-full block w-full p-2.5 dark:bg-white-700"
                value={instruction.description}
                onChange={(e) =>
                  handleInstructionChange(index, "description", e.target.value)
                }
              />
              {index === instructions.length - 1 && (
                <button
                  type="button"
                  onClick={addInstruction}
                  className="text-gray-500 hover:text-gray-700 text-3xl"
                >
                  +
                </button>
              )}
              {index !== instructions.length - 1 && (
                <button
                  type="button"
                  onClick={() => removeInstruction(index)}
                  className="text-gray-500 hover:text-gray-700 text-3xl"
                >
                  -
                </button>
              )}
            </div>
          ))}
          <div className="flex items-center space-x-2 justify-center">
            <input
              type="number"
              min="0"
              name="hours"
              placeholder="Hours"
              className="bg-gray-50 border border-black text-gray-900 sm:text-sm rounded-full block w-24 p-2.5 dark:bg-white-700 text-center"
              value={duration.hours}
              onChange={handleDurationChange}
            />
            <span className="text-white">h</span>
            <input
              type="number"
              min="0"
              max="59"
              name="minutes"
              placeholder="Minutes"
              className="bg-gray-50 border border-black text-gray-900 sm:text-sm rounded-full block w-24 p-2.5 dark:bg-white-700 text-center"
              value={duration.minutes}
              onChange={handleDurationChange}
            />
            <span className="text-white">min</span>
          </div>
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
