// Components
import { StatsCard, StatsChart } from "../../components";
// React Icons
import { MdOutlineWorkHistory } from "react-icons/md";
import { TbDeviceImacCancel } from "react-icons/tb";
import { CiCalendar } from "react-icons/ci";

const statsData = [
  {
    title: "Pending Applications",
    number: 27,
    icon: <MdOutlineWorkHistory />,
  },
  {
    title: "Interviews Scheduled",
    number: 31,
    icon: <CiCalendar />,
  },
  {
    title: "Jobs Declined",
    number: 50,
    icon: <TbDeviceImacCancel />,
  },
];

const Stats = () => {
  return (
    <section className="px-6">
      <div className="flex justify-between gap-x-4 mt-8">
        {statsData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded shadow p-4 w-full"
          >
            <StatsCard item={item} />
          </div>
        ))}
      </div>
      <div className="mt-8 bg-gray-300 rounded text-center py-4">
        <StatsChart />
      </div>
    </section>
  );
};

export default Stats;
