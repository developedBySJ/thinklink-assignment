import React from "react";
import { Truck } from "react-feather";
import orderStatus from "../../dummyData/orderStatus";
import clsx from "clsx";

export const OrderOverview = () => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-8">
      {orderStatus.map((data, i) => (
        <div
          className={clsx(
            "p-4 border-t-2 rounded shadow-sm transition hover:shadow-lg shadow-slate-200",
            data.border
          )}
          key={i}
        >
          <div className="flex justify-between gap-4">
            <p className="text-base font-semibold text-subtle-text">
              {data.label}
            </p>
            <img src={data.icon} alt={data.label} className="w-6 h-6" />
          </div>
          <p className="text-2xl font-bold">{data.count}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderOverview;
