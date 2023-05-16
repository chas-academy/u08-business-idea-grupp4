

function UserProfile() {

    return (
        <>
        <div className="flex justify-center">
            <div className="flex justify-between w-8/12 space-x-20 pt-20 pb-10">
                <div>
                    <img className="h-36 w-36 rounded-full" src="https://weu-az-web-ca-cdn.azureedge.net/mediacontainer/medialibraries/mypetdoctor/images/blog-images/grey-kitten.webp?ext=.webp" alt="Profile Picture"/>
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
            <div className="flex flex-col w-8/12 space-y-3">
                <h5 className="text-xs font-bold">UserName</h5>
                <p>Bio/Description</p>
            </div>
        </div>
        </>
    ) 
}

export default UserProfile