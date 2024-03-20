import React, { useState } from "react";

const initailValues = {
    name: "Your Name",
    email: "email@example.com",
    password: "",
    message: "Hello, Please enter a message!",
    gender: "male",
    course: "Select a Course",
    checkbox: false,
};


const FormHandling = () => {


    const [formdata, setFormData] = useState(initailValues);

    const handleOnChange = (event) => {
        // setText(event.target.value);
        // console.log(event);
        setFormData(() => ({
            ...formdata,
            [event.target.name]: event.target.value,

        }))


    }

    return (
        <div>
            <h1 className="flex items-center justify-center font-bold">Form Data</h1>
            {/* <button
                    type="button"
                    classNameName="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Subscribe
                </button> */}
            <div className="bg-gray-100 p-4">
                <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Registration Form</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text"
                                id="name"
                                name="name"
                                onChange={handleOnChange}
                                value={formdata.name}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email"
                                id="email"
                                name="email"
                                onChange={handleOnChange}
                                value={formdata.email}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password"
                                    id="password"
                                    name="password"
                                    onChange={handleOnChange}
                                    value={formdata.password}
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea id="message" rows="3"
                                      name="message"
                                      onChange={handleOnChange}
                                      value={formdata.message}
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                    
                            </textarea>
                        </div>
                        <div className="mb-4">
                            <span className="block text-sm font-medium text-gray-700">Gender</span>
                            <div className="mt-1 flex items-center">
                                <input type="radio" 
                                       id="male" 
                                       name="gender"
                                       value="male" 
                                       checked={formdata.gender === "male"} 
                                       onChange={handleOnChange} 
                                       className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                 />
                                <label htmlFor="male" className="ml-2 block text-sm text-gray-900">Male</label>
                            </div>
                            <div className="mt-1 flex items-center">
                                <input type="radio" 
                                       id="female" 
                                       name="gender" 
                                       value="female" 
                                       checked={formdata.gender === "female"}
                                       onChange={handleOnChange} 
                                       className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                 />
                                <label htmlFor="female" className="ml-2 block text-sm text-gray-900">Female</label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course</label>
                            <select 
                                id="course" 
                                name="course" 
                                onChange={handleOnChange} 
                                value={formdata.course}
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option>Select</option>
                                <option>Python</option>
                                <option>React</option>
                                <option>Java</option>
                                <option>Golang</option>
                            </select>
                        </div>
                        <div className="mb-4 flex">
                            <input type="checkbox" 
                                   id="terms" 
                                   name="terms" 
                                   onChange={handleOnChange} 
                                //    checked={formdata.checkbox}
                                   className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded " 
                                
                           />
                            <label htmlFor="terms" className="ml-1 block text-sm text-gray-900">I agree to the terms and conditions</label>
                        </div>
                        <button type="button" onClick={() => console.log(formdata)} className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}


export default FormHandling;