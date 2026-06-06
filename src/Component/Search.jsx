'use client';

import { FiSearch, FiX } from "react-icons/fi";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = (searchValue) => {
    const params = new URLSearchParams(searchParams);

    if (searchValue.trim()) {
      params.set("search", searchValue);
    } else {
      params.delete("search");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  const clearSearch = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("search");
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mx-auto mt-6 mb-10 max-w-2xl">
      <div className="relative">
        {/* Search Icon */}
        <FiSearch
          className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600"
          size={20}
        />

        {/* Input */}
        <input
          type="text"
          placeholder="Search by facility name or sport type..."
          defaultValue={searchParams.get("search") || ""}
          onChange={(e) => handleSearch(e.target.value)}
          className="
            w-full
            rounded-2xl
            border
            border-green-200
            bg-white
            py-4
            pl-12
            pr-12
            text-gray-700
            shadow-md
            outline-none
            transition-all
            duration-200
            placeholder:text-gray-400
            focus:border-green-500
            focus:ring-4
            focus:ring-green-100
          "
        />

        
      </div>

      
    </div>
  );
};

export default Search;