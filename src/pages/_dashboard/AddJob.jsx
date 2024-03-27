const AddJob = () => {
  return (
    <section className="bg-white border py-8 px-6">
      <form className="space-y-6">
        <div>
          <label
            htmlFor="position"
            className="block text-sm font-medium leading-6 "
          >
            Position
          </label>
          <div className="mt-2">
            <input
              id="position"
              name="position"
              type="text"
              autoComplete="position"
              required
              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium leading-6 "
          >
            Company
          </label>
          <div className="mt-2">
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="company"
              required
              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium leading-6 "
          >
            Location
          </label>
          <div className="mt-2">
            <input
              id="location"
              name="location"
              type="text"
              autoComplete="location"
              required
              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
            />
          </div>
        </div>

        <div className="flex justify-between gap-x-4">
          <div className="w-full">
            <label htmlFor="jobStatus" className="block text-sm font-medium ">
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

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Job
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddJob;
