import React, { useState } from "react";
import axios from "axios";
const UnplashImageSearch = () => {
    const [searchvalue, setSearchValue] = useState("");
    const [imagesresult, setImagesResult] = useState([]);

    const handleSelection = (selection) => {
        setSearchValue(selection);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const API_URL = `https://api.unsplash.com/search/photos?page=1&query=${searchvalue}&per_page=20&client_id=lKhVS_KABrJYskam5N2qc3T6yz_LOYCMcRn59yOLOSY;`;
        console.log("submitted", API_URL);
        axios.get(API_URL).then((response) => {
            // console.log(response.data);
            setImagesResult(response.data.results);
        }).catch((error) => {
            console.error('Error fetching images:', error);
        })
    };

    return (
        <>
            <div className="flex justify-center items-center mt-5">
                <form onSubmit={handleSubmit} className="w-full max-w-sm">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-500 sm:text-4xl mb-6 text-center">
                        Unsplash Image Search
                    </h1>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-full">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-sm text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
                                id="inline-full-name"
                                type="text"
                                placeholder="Type something to search..."
                                value={searchvalue}
                                onChange={(event) => setSearchValue(event.target.value)}
                            />
                        </div>
                        <button type="submit" className="p-3 ms-2 text-lg font-medium text-white bg-slate-700 rounded-lg border-2 border-blue-200 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>

                    </div>
                    <div className='filters flex space-x-2 justify-center'>
                        <button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleSelection('nature')}>Nature</button>
                        <button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleSelection('birds')}>Birds</button>
                        <button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleSelection('cats')}>Cats</button>
                        <button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleSelection('shoes')}>Shoes</button>
                    </div>

                </form>


            </div>

            {/* Showing Images Here */}
            <div className="mx-auto px-20 py-8">
                <div className="grid lg:grid-cols-4 gap-y-5 justify-items-center">
                    {imagesresult.map((value) => {
                        return (
                            <div key={value.id} className="relative bg-white rounded-md overflow-hidden h-72 w-72 drop-shadow-2xl transition-transform duration-300 transform hover:scale-110">
                                <img
                                    src={value.urls.regular}
                                    alt={searchvalue}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default UnplashImageSearch;
