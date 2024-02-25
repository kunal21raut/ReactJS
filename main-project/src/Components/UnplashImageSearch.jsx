import React, { useState } from "react";
import axios from "axios";
const UnplashImageSearch = () => {
    const [searchvalue, setSearchValue] = useState("text");
    const [imagesresult, setImagesResult] = useState([]);

    const handleSelection = (selection) =>{
        setSearchValue(selection);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const API_URL = `https://api.unsplash.com/search/photos?page=1&query=${searchvalue}&client_id=tpEDPuDFhU29k7HQXHxp0DBflseO_FGRBNYZjPUSsI4;`;
        console.log("submitted");
        axios.get(API_URL).then((response) => {
            // console.log(response.data);
            setImagesResult(response.data.results);
        });
    };

    return (
        <div className="flex justify-center items-center mt-5">
            <form onSubmit={handleSubmit} className="w-full max-w-sm">
                <h1 className="text-4xl font-bold tracking-tight text-purple-500 sm:text-4xl mb-6 text-center">
                    Unsplash Image Search
                </h1>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-full">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-sm text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            placeholder="Type something to search..."
                            value={searchvalue}
                            onChange={(event) => setSearchValue(event.target.value)}
                        />
                    </div>
                </div>
                <div className='filters flex space-x-2'>
                    <button className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleSelection('nature')}>Nature</button>
                    <button className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleSelection('birds')}>Birds</button>
                    <button className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleSelection('cats')}>Cats</button>
                    <button className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleSelection('shoes')}>Shoes</button>
                </div>

                <div className="container mx-auto px-4 py-8">
                    <div className="grid lg:grid-cols-3 gap-4">
                        {imagesresult.map((value) => {
                            return (
                                <div key={value.id} className="bg-white rounded-md overflow-hidden">
                                    <img
                                        src={value.urls.regular}
                                        alt="Laptop"
                                        className="object-cover"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

            </form>
        </div>
    );
};

export default UnplashImageSearch;
