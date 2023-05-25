import { Link } from "react-router-dom";

function UserProfile() {

    return (
        <>
        <div className="flex justify-center">
            <div className="flex justify-between w-7/12 pt-20 pb-10">
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

                <div className="flex flex-row justify-center space-x-5">
                    <Link to="" className="flex items-center space-x-3 text-gray-700 bg-gray-200 py-2 px-6 rounded-md font-medium hover:bg-gray-300 focus:bg-gray-200 focus:shadow-outline">
                        <p>Cake</p>
                    </Link>
                    <Link to="" className="flex items-center space-x-3 text-gray-700 bg-gray-200 py-2 px-6 rounded-md font-medium hover:bg-gray-300 focus:bg-gray-200 focus:shadow-outline">
                        <p>Pasta</p>
                    </Link>
                    <Link to="" className="flex items-center space-x-3 text-gray-700 bg-gray-200 py-2 px-6 rounded-md font-medium hover:bg-gray-300 focus:bg-gray-200 focus:shadow-outline">
                        <p>Drinks</p>
                    </Link>
                </div>
            </div>
        </div>
        </>
    ) 
}

export default UserProfile