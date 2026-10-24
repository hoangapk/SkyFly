import React from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { IoSearchSharp } from 'react-icons/io5';
function SearchAdmin({ handleClickOpen, title, handleSearch}) {
    return (
        <div className='flex justify-between text-white'>
            <h2 className='text-2xl font-bold bg-gradient-to-r from-[#6a11cb] to-[#2575fc] bg-clip-text text-transparent'>{title}</h2>
            <div className="group relative p-[2px] rounded-full bg-gradient-to-r from-[#6a11cb] to-[#2575fc] transition-all duration-300">
                <div className="bg-[#111827] text-white px-6 py-2 rounded-full flex items-center transition-all duration-300 group-hover:bg-[#1f2937]">
                    <input
                    onChange={handleSearch}
                        type="text"
                        placeholder="Search Cities..."
                        className="bg-transparent outline-none w-130 text-white placeholder-gray-400"
                    />
                    <IoSearchSharp className="cursor-pointer absolute right-5 -translate-y-1/2 top-1/2 text-gray-400 transition-colors duration-300 group-hover:text-white" />
                </div>
            </div>
            <div onClick={handleClickOpen} className='p-[2px] rounded-full bg-gradient-to-r from-[#6a11cb] to-[#2575fc]'>
                <button className='flex ef cursor-pointer gap-2 rounded-full justify-center items-center bg-[#111827] text-white px-6 py-2 rounded-full'>
                    <p className='font-bold'>Add</p>
                    <IoMdAddCircle className='text-2xl'/>
                </button>
            </div>
        </div>
    );
}

export default SearchAdmin;