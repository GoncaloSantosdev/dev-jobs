/* eslint-disable react/prop-types */
const StatsCard = ({ item }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold">{item.number}</p>
        <span className="text-3xl">{item.icon}</span>
      </div>
      <h3 className="mt-6 text-md">{item.title}</h3>
    </>
  );
};

export default StatsCard;
