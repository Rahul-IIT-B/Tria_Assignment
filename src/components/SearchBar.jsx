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
      >
        <svg
          aria-hidden="true"
          width="24"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
            <path
              d="M15 14c2.761 0 5 2.239 5 5v1H4v-1c0-2.761 2.239-5 5-5h6z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="11.5"
              cy="7.5"
              r="3.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          <g transform="translate(-4,-8) scale(1.4)">
            <path
              d="M19 8v4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 10h-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </button>
    </div>
  );
}
