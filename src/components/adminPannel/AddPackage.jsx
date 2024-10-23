import React from 'react';
import { FaPen } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
const PackageForm = () => {
  return (
    <div className="flex flex-col items-start w-full justify-start min-h-screen  p-6">
      <div className="w-full  rounded-lg sm:p-8 p-1">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-2 text-black">Package</h1>
        <p className="text-gray-600 mb-6">Enter package details</p>

        {/* Form */}
        <form className=" border-dashed border border-[#022213] lg:p-10 p-4 sm:p-6 md:p-8 rounded-lg">
          {/* Plan Field */}
          <div className='flex flex-col lg:flex-row gap-8'>
            <div className='w-full lg:w-1/2 flex flex-col gap-y-4'>
              <div className="relative w-full">
                <label className="block text-gray-700 font-medium mb-1">Plan</label>
                <input
                  type="text"
                  placeholder="Enter period"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-gray-300"
                />
                <FaPen className="absolute right-3 top-9 text-[#71A10F] cursor-pointer" />
              </div>
              <div className="relative w-full">
                <label className="block text-gray-700 font-medium mb-2">Price</label>
                <input
                  type="text"
                  placeholder="Enter period"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-gray-300"
                />
                <FaPen className="absolute right-3 top-9 text-[#71A10F] cursor-pointer" />
              </div>
              <div className="relative w-full">
                <label className="block text-gray-700 font-medium mb-2">Category</label>
                <input
                  type="text"
                  placeholder="Enter period"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-gray-300"
                />
                <FaPen className="absolute right-3 top-9 text-[#71A10F] cursor-pointer" />
              </div>
              <div className="relative w-full">
                <label className="block text-gray-700 font-medium mb-2">Period</label>
                <input
                  type="text"
                  placeholder="Enter period"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-gray-300"
                />
                <FaPen className="absolute right-3 top-9 text-[#71A10F] cursor-pointer" />
              </div>
            </div>


            <div className='w-full lg:w-1/2 flex flex-col gap-y-1.5'>
              <div className="relative w-full">
                <label className="block text-gray-700 font-medium mb-2">Features</label>
                <textarea
                  placeholder="Enter features"
                  className="w-full px-4 text-start lg:py-4 py-2 border border-gray-300 rounded-lg focus:outline-gray-300 resize-none"
                  rows="4"  // Adjust rows to control height
                ></textarea>
                <FaPen className="absolute right-3 top-9 text-[#71A10F] cursor-pointer" />
              </div>

              <div className="relative w-full mt-2.5">
                <label className="block text-gray-700 font-medium mb-2">Offers list Persentage  type</label>
                <input
                  type="text"
                  placeholder="Enter period"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-gray-300"
                />
                <FaPen className="absolute right-3 top-9 text-[#71A10F] cursor-pointer" />
              </div>
              <div className="relative w-full">
                <label className="block text-gray-700 font-medium mb-2">Offer code</label>
                <input
                  type="text"
                  placeholder="Enter period"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-gray-300"
                />
                <FaPen className="absolute right-3 top-9 text-[#71A10F] cursor-pointer" />
              </div>

            </div>
          </div>





          {/* Buttons */}
          <div className="flex items-center lg:justify-end justify-center space-x-4 mt-6">
            <button
              type="button"
              className="sm:px-12 px-8 py-1 sm:py-2 border border-[#022213] rounded-lg text-gray-900 font-medium hover:bg-[#022213] transition duration-300 hover:text-white"
              onClick={() => console.log('Close')}
            >
              Clear
            </button>
            <button
              type="submit"
              className="sm:px-12 px-8 py-1 sm:py-2 bg-[#022213] hover:bg-[#72A10F] transition duration-300 text-white rounded-lg "
            >
              Submit
            </button>
          </div>
        </form>

        {/* Add Package Button */}
        <div className=" justify-center items-center lg:mt-8 mt-4 flex flex-col gap-y-4">
          <FaCirclePlus className='text-[#72A10F]' size={20} />
          <button
            type="button"
            className="px-8 py-3 text-white rounded-lg bg-[#022213] hover:bg-[#72A10F] transition duration-300"
          >
            Add package
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageForm;
