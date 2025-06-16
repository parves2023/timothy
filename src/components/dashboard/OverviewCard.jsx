const OverviewCard = ({ title, value, trend }) => {
  const isPositive = trend.includes("↑");
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <div className="flex justify-between items-end mt-2">
        <span className="text-2xl font-bold">{value}</span>
        <span className={`text-sm ${isPositive ? "text-green-500" : "text-red-500"}`}>{trend}</span>
      </div>
    </div>
  );
};

export default OverviewCard;
