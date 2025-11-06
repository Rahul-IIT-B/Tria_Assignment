import React from "react";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search by name, email or phone...",
  onNew,
}) {
  return (
    <div className="searchbar">
      <label htmlFor="search" className="visually-hidden">
        Search contacts by name, email or phone
      </label>
      <input
        id="search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search contacts by name, email or phone"
      />

      <button
        type="button"
        className="new-btn"
        aria-label="Add new contact"
        onClick={() => onNew && onNew()}
      ><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
        </svg>
      </button>
    </div>
  );
}
