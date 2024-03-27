import { JobsCard, JobsFilter } from "../../components";

const AllJobs = () => {
  return (
    <section className="bg-white border py-8 px-6">
      <JobsFilter />

      <div className="mt-8">
        <h4 className="font-semibold">99 jobs found</h4>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <JobsCard />
          <JobsCard />
          <JobsCard />
        </div>
      </div>
    </section>
  );
};

export default AllJobs;
