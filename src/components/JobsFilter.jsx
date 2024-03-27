const JobsFilter = () => {
  return (
    <>
      {" "}
      <div className="w-full">
        <label htmlFor="search" className="block text-sm font-medium">
          Search
        </label>
        <input
          id="search"
          type="search"
          placeholder="Search..."
          className="border text-sm rounded-lg block w-full p-2.5 mt-2"
        />
      </div>
      <div className="flex justify-between gap-x-4 mt-6">
        <div className="w-full">
          <label htmlFor="jobStatus" className="block text-sm font-medium">
            Job Status
          </label>
          <select
            id="jobStatus"
            className="border text-sm rounded-lg block w-full p-2.5 mt-2"
          >
            <option value="pending">Pending</option>
            <option value="interview">Interview</option>
            <option value="declined">Declined</option>
          </select>
        </div>

        <div className="w-full">
          <label htmlFor="jobTypes" className="block text-sm font-medium ">
            Job Type
          </label>
          <select
            id="jobTypes"
            className="border text-sm rounded-lg block w-full p-2.5 mt-2"
          >
            <option value="pending">Full-Time</option>
            <option value="interview">Part-Time</option>
            <option value="declined">Internship</option>
          </select>
        </div>

        <div className="w-full">
          <label htmlFor="jobSettings" className="block text-sm font-medium ">
            Job Settings
          </label>
          <select
            id="jobSettings"
            className="border text-sm rounded-lg block w-full p-2.5 mt-2"
          >
            <option value="pending">On-site</option>
            <option value="interview">Hybrid</option>
            <option value="declined">Remote</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default JobsFilter;
