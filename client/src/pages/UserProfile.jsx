import { Link } from "react-router-dom";

function UserProfile() {

    return (
        <>
        <div className="flex justify-center">
            <div className="flex justify-between lg:w-7/12 pt-20 pb-10">
                <div>
                    <img className="h-48 w-48 rounded-full" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg" alt="Profile Picture"/>
                </div>
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-row space-x-16 pt-2">
                        <div className="flex flex-col text-center">
                            <h4 className="text-2xl">47</h4>
                            <p>recipes</p>
                        </div>
                        <div className="flex flex-col text-center">
                            <h4 className="text-2xl">500</h4>
                            <p>followers</p>
                        </div>
                        <div className="flex flex-col text-center">
                            <h4 className="text-2xl">100</h4>
                            <p>following</p>
                        </div>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Edit profile
                    </button>
                </div>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="flex flex-col w-7/12 space-y-3">
                <h5 className="text-xs font-bold">UserName</h5>
                <p>Bio/Description</p>
            </div>
        </div>
        
        <div className="flex justify-center pt-20">
            <div className="flex flex-col text-center w-7/12 space-y-3">
                <h1>CATEGORIES</h1>

                <div className="flex flex-row">
                    <div className="flex flex-row justify-center space-x-5 overflow-x-auto pb-2">
                        <Link to="" className="flex items-center space-x-3 text-gray-700 bg-gray-200 py-2 px-6 rounded-md font-medium hover:bg-gray-300 focus:bg-gray-200 focus:shadow-outline">
                            <p>Cake</p>
                        </Link>
                        <Link to="" className="flex items-center space-x-3 text-gray-700 bg-gray-200 py-2 px-6 rounded-md font-medium hover:bg-gray-300 focus:bg-gray-200 focus:shadow-outline">
                            <p>Pasta</p>
                        </Link>
                        <Link to="" className="flex items-center space-x-3 text-gray-700 bg-gray-200 py-2 px-6 rounded-md font-medium hover:bg-gray-300 focus:bg-gray-200 focus:shadow-outline">
                            <p>Drinks</p>
                        </Link>
                        <Link to="" className="flex items-center space-x-3 text-gray-700 bg-gray-200 py-2 px-6 rounded-md font-medium hover:bg-gray-300 focus:bg-gray-200 focus:shadow-outline">
                            <p>Drinks</p>
                        </Link>
                        <Link to="" className="flex items-center space-x-3 text-gray-700 bg-gray-200 py-2 px-6 rounded-md font-medium hover:bg-gray-300 focus:bg-gray-200 focus:shadow-outline">
                            <p>Drinks</p>
                        </Link>
                        <Link to="" className="flex items-center space-x-3 text-gray-700 bg-gray-200 py-2 px-6 rounded-md font-medium hover:bg-gray-300 focus:bg-gray-200 focus:shadow-outline">
                            <p>Drinks</p>
                        </Link>
                        <Link to="" className="flex items-center space-x-3 text-gray-700 bg-gray-200 py-2 px-6 rounded-md font-medium hover:bg-gray-300 focus:bg-gray-200 focus:shadow-outline">
                            <p>Drinks</p>
                        </Link>
                    </div>
                    <Link to="">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 mt-1 mx-2 stroke-2 hover:text-blue-400" viewBox="0 0 48 48"><g fill="none" stroke="currentColor"><rect width="36" height="36" x="6" y="6" rx="3"/><path d="M24 16v16m-8-8h16"/></g></svg>
                    </Link>
                </div>

            </div>
        </div>

        <div className="flex justify-center">
            <div className="flex justify-center w-7/12 pt-20 space-x-5 border-b">
                <Link to="" className="flex items-center justify-center space-x-3 hover:border-b hover:border-b-black focus:border-b-black w-36 pb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"/></svg>
                <p>POSTS</p>
                </Link>
                <Link to="" className="flex items-center justify-center space-x-3 hover:border-b hover:border-b-black focus:border-b-black w-36 pb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21V5q0-.825.588-1.413T7 3h10q.825 0 1.413.588T19 5v16l-7-3l-7 3Zm2-3.05l5-2.15l5 2.15V5H7v12.95ZM7 5h10H7Z"/></svg>
                <p>SAVED</p>
                </Link>
            </div>
        </div>

        <div className="flex justify-center pt-5">
        <div className="grid grid-cols-3 gap-3 w-7/12">
            <div className="bg-gray-200 h-48">bild</div>
            <div className="bg-gray-200 h-48">bild</div>
            <div className="bg-gray-200 h-48">bild</div>
            <div className="bg-gray-200 h-48">bild</div>
            <div className="bg-gray-200 h-48">bild</div>
            <div className="bg-gray-200 h-48">bild</div>
            <div className="bg-gray-200 h-48">bild</div>
            <div className="bg-gray-200 h-48">bild</div>
            <div className="bg-gray-200 h-48">bild</div>
            <div className="bg-gray-200 h-48">bild</div>
            <div className="bg-gray-200 h-48">bild</div>
            <div className="bg-gray-200 h-48">bild</div>
        </div>
        </div>
        </>
    ) 
}

export default UserProfile