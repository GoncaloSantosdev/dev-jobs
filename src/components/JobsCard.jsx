// React Icons
import { CiLocationArrow1 } from "react-icons/ci";

const JobsCard = () => {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
      <div className="flex items-center gap-x-4 border-b pb-2">
        <svg
          className="w-7 h-7 text-gray-500 mb-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
        </svg>
        <a href="#">
          <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900">
            Google
          </h5>
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 my-4">
        <div className="w-full flex items-center gap-x-2">
          <CiLocationArrow1 size={18} />
          <span className="text-sm">Location</span>
        </div>
        <div className="w-full flex items-center gap-x-2">
          <CiLocationArrow1 size={18} />
          <span className="text-sm">Location</span>
        </div>
        <div className="w-full flex items-center gap-x-2">
          <CiLocationArrow1 size={18} />
          <span className="text-sm">Location</span>
        </div>
        <div className="py-1 border rounded px-3">
          <span className="text-sm">Pending</span>
        </div>
      </div>

      <div className="flex gap-x-4 mt-4">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm text-white hover:scale-105 transition-all w-full"
        >
          Edit Job
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm text-white hover:scale-105 transition-all w-full"
        >
          Delete Job
        </button>
      </div>
    </div>
  );
};

export default JobsCard;
