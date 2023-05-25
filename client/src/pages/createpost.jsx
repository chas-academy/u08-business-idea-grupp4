import React, {useState} from 'react'
function CreatePost() {
/*   const [title,setTitle] = useState("")
  const [body,setBody]  = useState("") */
  const [image,setImage]  = useState("")

const postData=async()=>{
    const data = new FormData() 
    await data.append("file",image)
    await data.append("upload_preset","recept-clone")
    await data.append("cloud_name","djnjxr8t9")
    await fetch(`https://api.cloudinary.com/v1_1/djnjxr8t9/image/upload`,{
        method:"post", body:data
    })
    .then(res=>res.json())
    .then(async data=>{
      console.log(data);
})
 }

    return (
    <div className ="bg-gray-50 dark:bg-gray-900"
    style={{
          margin:"10px auto",
          maxWidth:"500px",
          padding:"20px",
          textAlign:"center"
      }} >
  
          <div > 
<h2 className='font-serif  text-3xl m-5'>Create Post</h2>

          </div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
  
  
      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input id="dropzone-file" type="file" 
              onChange={(e)=>setImage(e.target.files[0])}
          className="hidden" />
      </label>
  
  
       {/*    
        <input type="text" placeholder='description'
         value={title} onChange={(e)=>setTitle(e.target.value)}
       
        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
        
          <input type="text" placeholder='ingredients'
    value={body} onChange={(e)=>setBody(e.target.value)}
          className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
         */}
          <input type="text" placeholder='Instructions' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
          <input type="text" placeholder='Cooking Time' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
          <input type="text" placeholder='Shoping list URL' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
  
       </div>
        <button 
        className="w-60 text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 p-2.5 mb-5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        onClick={postData}
        >
      POST
  </button>
  
      </div>
  
  
      </div>
    ) 
}

export default CreatePost