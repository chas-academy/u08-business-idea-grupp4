import { Link, Outlet } from "react-router-dom";

function Navbar() {

    return (
      <>
       <div className="flex flex-wrap bg-gray-100 w-full h-screen">
        <div className="w-3/12 bg-white rounded p-3 shadow-lg max-md:hidden">
          <div className="flex items-center space-x-4 p-2 mb-5">
              <img className="h-12 w-12 rounded-full" src="https://weu-az-web-ca-cdn.azureedge.net/mediacontainer/medialibraries/mypetdoctor/images/blog-images/grey-kitten.webp?ext=.webp" alt="Profile Picture"/>
              <div>
                  <h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">UserName</h4>
              </div>
          </div>
          <ul className="space-y-2 text-sm">
              <li>
                  <Link to="/" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                      <span className="text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.893 7.893 0 0 1 12 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.928 7.928 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 11Z"/></svg>
                      </span>
                      <p>Profile</p>
                    </Link>
              </li>
              <li>
                <Link to="/" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                    <span className="text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5" viewBox="0 0 512 512"><path fill="currentColor" d="M39.906 27.188c-9.118 13.907-11.366 30.99-7.843 50.718c4.2 23.526 16.91 50.038 35.28 75c36.742 49.925 96.05 93.082 148.813 99.625l3.688.47l2.375 2.844L416.374 490.22c19.352 4.624 31.847 1.745 38.344-4.69c6.547-6.484 9.566-19.005 4.717-38.874L39.908 27.187zM414.97 29.5L306.47 138c-12 11.998-12.104 25.2-5.908 39.625l2.563 5.97l-4.688 4.5L262 222.844l29.594 29.593l34.594-36.532l4.5-4.75l5.968 2.594c15.165 6.535 29.546 6.267 40.688-4.875l108.5-108.5L471.75 86.28l-70.563 70.532L388 143.595l70.53-70.53L443.5 58.03l-70.53 70.532l-13.22-13.218l70.53-70.53L414.97 29.5zM210.936 271.563L25.53 448.469c-4.575 18.95-1.644 30.787 4.532 36.905c6.178 6.118 18.128 8.927 36.844 4.406l173.22-182.967l-29.19-35.25z"/></svg>
                    </span>
                    <p>Feed</p>
                  </Link>
              </li>
              <li>
                  <Link to="/" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                    <span className="text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5" viewBox="0 0 24 24"><path fill="currentColor" d="m18.9 20.3l-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275t-.7-.275ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"/></svg>
                    </span>
                    <p>Search</p>
                  </Link>
              </li>
              <li>
                  <Link to="/" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                    <span className="text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13v3q0 .425.288.713T12 17q.425 0 .713-.288T13 16v-3h3q.425 0 .713-.288T17 12q0-.425-.288-.713T16 11h-3V8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8v3H8q-.425 0-.713.288T7 12q0 .425.288.713T8 13h3Zm-6 8q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm0-2h14V5H5v14ZM5 5v14V5Z"/></svg>
                    </span>
                    <p>Create post</p>
                  </Link>
              </li>
          </ul>

          <div className="absolute bottom-5 space-y-2 text-sm">
            <Link to="/" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <span className="text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M15.325 16.275q-.275-.325-.275-.737t.275-.688l1.85-1.85H10q-.425 0-.713-.288T9 12q0-.425.288-.713T10 11h7.175l-1.85-1.85q-.3-.3-.3-.713t.3-.712q.275-.3.688-.3t.687.275l3.6 3.6q.15.15.213.325t.062.375q0 .2-.062.375t-.213.325l-3.6 3.6q-.325.325-.713.288t-.662-.313ZM5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h6q.425 0 .713.288T12 4q0 .425-.288.713T11 5H5v14h6q.425 0 .713.288T12 20q0 .425-.288.713T11 21H5Z"/></svg>
              </span>
              <p>Logout</p>
            </Link>
          </div>

        </div>

          <div className="w-9/12">
              <div className="p-4 text-gray-500">
                  CONTENT HÄR 
                  <Outlet />
              </div>
          </div>
      </div>  
      </>
    )
  }
  
  export default Navbar