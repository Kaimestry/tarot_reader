import React from "react";

const SearchBar = ({ placeholder = "Search...", className = "" }) => {
  return (
    <div className={`my-5 relative w-full ${className}`}>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative flex items-center group"
      >
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 transition-colors text-muted group-focus-within:text-primary"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/center"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Input Field */}
        <input
          type="search"
          placeholder={placeholder}
          className="block w-full py-2.5 pl-10 pr-4 text-sm transition-all duration-200 border rounded-xl outline-none
                     bg-surface text-main border-divider
                     placeholder:text-muted
                     focus:ring-2 focus:ring-primary focus:border-primary
                     hover:border-primary/50"
        />

        {/* Desktop Search Button (Optional) */}
        <button
          type="submit"
          className="absolute right-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all
                     bg-primary text-main hover:brightness-110 active:scale-95
                     hidden md:block"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
