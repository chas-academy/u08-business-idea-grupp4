export default function CookingInstructions() {
    return (
        <div className="border-black border-2 rounded-lg px-4 py-6">
            <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-5 lg:grid-rows-1">
                <div className="col-span-2 lg:col-span-2">
                    <h3 className="text-4xl font-bold">Ingredients</h3>
                    <div className="py-2" />
                    <div className="space-y-2 text-lg">
                        <div>
                            <input className="mr-2 p-1" name="random1" type="radio" />
                            <label htmlFor="random1">Random 1</label>
                        </div>
                        <div>
                            <input className="mr-2" name="random2" type="radio" />
                            <label htmlFor="random2">Random 1</label>
                        </div>
                        <div>
                            <input className="mr-2" name="random2" type="radio" />
                            <label htmlFor="random2">Random 1</label>
                        </div>
                        <div>
                            <input className="mr-2" name="random2" type="radio" />
                            <label htmlFor="random2">Random 1</label>
                        </div>
                        <div>
                            <input className="mr-2" name="random2" type="radio" />
                            <label htmlFor="random2">Random 1</label>
                        </div>
                    </div>

                </div>
                <div className="col-span-2 lg:col-span-3">
                    <h3 className="text-4xl font-bold">Instructions</h3>
                    <div className="py-2" />
                    <ol className="list-decimal list-inside text-lg" type="1">
                        <li>Blanda mjöl och salt i en bunke. Vispa i hälften av mjölken och vispa till en slät smet. Vispa i resten av mjölken och äggen.</li>
                        <li>Stek tunna pannkakor i lite smör, för varje pannkaka, i en stek- eller pannkakspanna.</li>
                        <li>Servera med sylt, bär eller frukt eller med salta tillbehör som Räksalsa med gurka och lime, Rökt lax med dillkräm eller Avokadoröra med bacon och tomat.</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}
