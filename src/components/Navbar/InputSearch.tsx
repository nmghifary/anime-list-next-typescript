"use client";

import { useRouter } from "next/navigation";
import { FormEvent, KeyboardEvent, useRef } from "react";
import { IoIosSearch } from "react-icons/io";

const InputSearch: React.FC = () => {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const handleSearch = (event: KeyboardEvent<HTMLInputElement> | FormEvent) => {
    if ("key" in event && event.key !== "Enter") {
      return;
    }
    event.preventDefault();
    const keyword = searchRef.current?.value;
    if (keyword && keyword?.trim() !== "") {
      router.push(`/search/${encodeURIComponent(keyword)}`);
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="pencarian ..."
        className="w-full rounded-md p-2"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button
        onClick={handleSearch}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-2xl"
      >
        <IoIosSearch />
      </button>
    </div>
  );
};

export default InputSearch;
