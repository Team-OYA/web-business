import React from "react";

const TailwindIcon = ({pathData}) => (
    <svg
        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
    >
        <path d={pathData} />
    </svg>
);

export default TailwindIcon;
