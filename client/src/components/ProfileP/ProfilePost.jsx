export default function ProfilePost() {
    return (
        <div className="border-black border-2 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-10">
                <div className="col-span-1 lg:col-span-6">
                    <img src="https://img.koket.se/standard-mega/kladdkaka-2.jpg" className="w-full h-full"></img>
                </div>
                <div className="col-span-1 lg:col-span-4 px-4 py-3">
                    <div>
                        <h1 className="text-5xl font-bold">UserName</h1>
                        <div className="py-2" />
                        <h3 className="text-xl">Descriptionshahwdhawhdwhaahdwhah</h3>
                    </div>
                    <div className="py-2" />
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mr-2">
                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                            </svg>
                            <h5 className="text-xl">100 likes</h5>
                        </div>
                        <div className="flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mr-2">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
                            <h5 className="text-xl">4,5</h5>
                        </div>
                    </div>
                    <div className="rounded-full my- p-0.5 bg-black"/>
                        <h1 className="text-3xl">FLÖDE</h1>
                    <div className="rounded-full my-4 p-0.5 bg-black"/>
                    <div className="flex flex-grow">
                        <div className="grow">
                            <input className="text-xl bg-transparent" placeholder="Lägg till kommentar." type="text"/>
                        </div>
                        <div>
                            <select className="rounded-lg bg-gray-300 p-1">
                                <option>1 Star</option>
                            </select>
                            <button className="text-xl font-bold text-center p-1">Post</button>
                        </div>
                    </div>
                    <div className="rounded-full my-4 p-0.5 bg-black"/>
                    <h3 className="text-xl font-semibold text-gray-500">April 2023</h3>
                </div>
            </div>
        </div>
    )
}
