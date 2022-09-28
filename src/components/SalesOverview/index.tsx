import React from "react";
import { RefreshCw, ChevronDown, TrendingUp } from "react-feather";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import lineChartData from "../../dummyData/lineChart";
import { Chart } from "./Chart";

export const SalesOverview = () => {
  return (
    <div className="mt-6">
      <h1 className="mb-4 font-bold">Sales Details</h1>
      <div className="p-4 pb-0 border border-peach-light rounded">
        <div className="flex flex-wrap gap-4 justify-between pb-5 border-b border-peach-light">
          <div>
            <h1 className="font-bold text-dark">Total Sales Overview</h1>
            <p className="text-subtle-text">7 - 13 Aug 2020</p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-8">
            <button className="flex gap-2 items-center rounded-full text-body-text">
              <span>
                <RefreshCw className="w-4 h-4" />
              </span>
              <p>Refresh</p>
            </button>

            <button className="flex font-bold">
              <p className="text-subtle-text">Filter by</p>
              <span className="mx-2 text-subtle-text">|</span>
              <div className="flex gap-2">
                This Week
                <span>
                  <ChevronDown />
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-4">
          <div className="col-span-3 py-4 pr-4">
            <div className="flex flex-wrap items-center justify-between gap-8">
              <h1 className="text-dark font-semibold text-5xl">$71,729.00</h1>
              <div>
                <p className="text-dark flex items-center gap-2 font-semibold">
                  <TrendingUp className="w-5 text-success" />
                  Highest revenue since 2 weeks ago
                </p>
              </div>
            </div>
            <p className="font-bold text-success flex gap-2 mt-2">
              <TrendingUp className="w-5" />
              +21% from last week
            </p>
            <div className="mt-8">
              <Chart />
            </div>
          </div>
          <div className="py-4 pl-4 xl:border-l border-peach-light">
            <p className="font-bold text-subtle-text mb-4">Total Profit</p>
            <h1 className="text-primary font-bold text-3xl mb-2">$12,545.00</h1>
            <p className="font-bold text-success flex gap-2 mb-10">
              <TrendingUp className="w-5" />
              +23% from last week
            </p>
            <p className="font-bold text-subtle-text mb-2">
              Total Products Sold
            </p>
            <h1 className="text-dark font-bold text-3xl">329</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
