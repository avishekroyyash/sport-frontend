'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Filter = () => {
   const searchParam = useSearchParams()
      const router = useRouter()
      const pathName = usePathname()

       const handleSearch = (searchValue)=>{
 const params = new URLSearchParams(searchParam)
     console.log(params.toString(),'this is params');
    console.log(searchValue,'this is search input ')
    if(searchValue.trim()){
        params.set('fillter',searchValue)
    }
    else{
        params.delete('fillter')
    }
    router.push(`${pathName}?${params.toString()}`)
  }
  

  return (
    <div className="my-6 flex flex-col gap-3 rounded-2xl border border-green-100 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
      {/* Label */}
      <div>
        <h3 className="text-xl font-bold text-green-700">
          Filter Facilities
        </h3>
        <p className="text-sm text-gray-500">
          Select a sport category to find facilities faster
        </p>
      </div>

      {/* Select */}
      <select
        id="category"
        className="
          w-full md:w-72
          rounded-xl
          border-2 border-green-200
          bg-white
          px-4 py-3
          text-gray-700
          outline-none
          transition-all duration-200
          focus:border-green-500
          focus:ring-2 focus:ring-green-200
          cursor-pointer
          shadow-sm
        "
       defaultValue={searchParam.get('fillter') || ''}
        onChange={(e)=>handleSearch(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Football">Football</option>
        <option value="Cricket">Cricket</option>
        <option value="Basketball">Basketball</option>
        <option value="Badminton">Badminton</option>
        <option value="Table Tennis">Table Tennis</option>
        <option value="Rugby">Rugby</option>
      </select>
    </div>
  );
};

export default Filter;