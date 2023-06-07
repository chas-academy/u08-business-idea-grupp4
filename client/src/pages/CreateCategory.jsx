import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateCategory = () => {
  const userID = window.localStorage.getItem("userID");
  const [title, setTitle] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/category/addCategory', {
        title: title, 
        user: userID,
      });
      Notify()
      setTitle("")
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const Notify = () => {
    return toast('Category list created!');
  };
  

  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      <div>
        <div className="flex justify-center flex-col items-center px-4 sm:px-6 lg:px-8">
          <div>
            <h3 className="text-center sm:text-base lg:text-xl uppercase p-5">Add Category</h3>
          </div>
          <div>
            <form onSubmit={onSubmit}>
            <input
            className="p-1 outline outline-2 outline-black border-black border-3 rounded-xl"
            type="text"
            placeholder="category name"
            name="title" 
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
   <button type='submit' className="w-full sm:w-auto px-10">
          <div className="bg-gray-300 hover:bg-gray-800 text-gray-900 font-semibold py-2 px-4 sm:px-10 border border-gray-400 rounded shadow bg-transparent hover:text-white background-black">
            ADD
          </div>
        </button>
        <ToastContainer />

            </form>
          </div>
          <div>
            <h3 className="text-sm sm:text-base lg:text-xl uppercase p-10 text-center ">Add content in category name</h3>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-6 items-center justify-items-center">
          <div className="w-full sm:w-auto space-between">
            <div className="border border-gray-300 rounded p-12 sm:p-24 mb-10 mx-1">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center m-12 py-2 w-full">
     
      </div>
    </div>
  );
}

export default CreateCategory;