import React, { useState } from 'react'

export const Signupform = () => {
    const [input, setInput] = useState("")
    const handleSubmit = ()=>{

    }
  return (
   <>
 <div className="flex justify-center items-center min-h-screen">
            <form 
                className="bg-white shadow-md rounded-lg p-6 w-96" 
                onSubmit={handleSubmit}
            >
                <h2 className="text-xl font-bold mb-4 text-center">Sign Up</h2>

                <label className="block mb-1 font-semibold">Full Name</label>
                <input
                    type="text"
                    name="fullName"
                    // value={formData.fullName}
                    // onChange={handleChange}
                    className="w-full border rounded-md p-2 mb-3"
                    placeholder="Enter your full name"
                    required
                />

                <label className="block mb-1 font-semibold">Email</label>
                <input
                    type="email"
                    name="email"
                    // value={formData.email}
                    // onChange={handleChange}
                    className="w-full border rounded-md p-2 mb-3"
                    placeholder="Enter your email"
                    required
                />

                <label className="block mb-1 font-semibold">Password</label>
                <input
                    type="password"
                    name="password"
                    // value={formData.password}
                    // onChange={handleChange}
                    className="w-full border rounded-md p-2 mb-3"
                    placeholder="Enter password"
                    required
                />

                <label className="block mb-1 font-semibold">Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    // value={formData.confirmPassword}
                    // onChange={handleChange}
                    className="w-full border rounded-md p-2 mb-4"
                    placeholder="Confirm password"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600"
                >
                    Sign Up
                </button>
            </form>
        </div>
   </>
  )
}
