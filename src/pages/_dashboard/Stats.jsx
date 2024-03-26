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
    <div>
      {statsData.map((stat, index) => (
        <div key={index}>{stat.title}</div>
      ))}
    </div>
  );
};

export default Stats;
