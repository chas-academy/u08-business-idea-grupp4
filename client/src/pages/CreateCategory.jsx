export default function CreateCategory() {
    return (
        <div className="relative min-h-screen flex flex-col justify-between">
            <div>
                <div className="px-4 sm:px-6 lg:px-8">
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600">Go Back</p>
                </div>
                <div className="flex justify-center flex-col items-center px-4 sm:px-6 lg:px-8">
                    <div>
                        <h3 className="text-sm sm:text-base lg:text-xl uppercase p-5">Add Category</h3>
                    </div>
                    <div>
                        <input className="p-1 outline outline-2 outline-black border-black border-3 rounded-xl" type="text" placeholder="catigory name"></input>
                    </div>
                    <div>
                        <h3 className="text-sm sm:text-base lg:text-xl uppercase p-10 ">Add content in category name</h3>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-6 items-center justify-items-center">
                    <div className="w-full sm:w-auto">
                        <div className="border border-gray-300 rounded p-12 sm:p-24 mb-10 mx-6"></div>
                    </div>
                    <div className="w-full sm:w-auto">
                        <div className="border border-gray-300 rounded p-12 sm:p-24 mb-10 mx-6"></div>
                    </div>
                    <div className="w-full sm:w-auto">
                        <div className="border border-gray-300 rounded p-12 sm:p-24 mb-10 mx-6"></div>
                    </div>
                    <div className="w-full sm:w-auto">
                        <div className="border border-gray-300 rounded p-12 sm:p-24 mb-10 mx-6"></div>
                    </div>
                    <div className="w-full sm:w-auto">
                        <div className="border border-gray-300 rounded p-12 sm:p-24 mb-10 mx-6"></div>
                    </div>
                    <div className="w-full sm:w-auto space-between">
                        <div className="border border-gray-300 rounded p-12 sm:p-24 mb-10 mx-6"></div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center py-10 w-full">
                <button className="w-full sm:w-auto">
                    <div className="bg-gray-300 hover:bg-gray-800 text-gray-900 font-semibold py-2 px-4 sm:px-10 border border-gray-400 rounded shadow bg-transparent hover:text-white background-black">
                        ADD
                    </div>
                </button>
            </div>
        </div>
    )
}
