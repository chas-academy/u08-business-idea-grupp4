

export default function CreateCategory() {
  return (
    <div>
        <div>
            <p className="text-gray-600">Go Back</p>
        </div>
        <div className="flex justify-center flex-col items-center">
            <div>
                <h3 className="uppercase text-xl">Add Category</h3>
            </div>
            <div>
                <input className="p-1 border-black border-3 rounded-xl" type="text"></input>
            </div>
            <div>
            <h3 className="uppercase text-xl">TEMPLATE TEXT</h3>
            </div>
        </div>
        <div className="flex justify-center items-center w-3/4">
            <div className="grid grid-cols-3 gap-2">
                <div>
                    <h1>Test</h1>
                </div>
                <div>
                    <h1>Test</h1>
                </div>
                <div>
                    <h1>Test</h1>
                </div>
                <div>
                    <h1>Test</h1>
                </div>
                <div>
                    <h1>Test</h1>
                </div>
                <div>
                    <h1>Test</h1>
                </div>
            </div>
        </div>
    </div>
  )
}
