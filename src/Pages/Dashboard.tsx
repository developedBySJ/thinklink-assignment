import React from "react";
import Header from "../components/Header";
import OrderOverview from "../components/OrderOverview";
import Sidebar from "../components/Sidebar";
import headerData from "../dummyData/header";
import { PlusCircle } from "react-feather";
import { SalesOverview } from "../components/SalesOverview";
import { Inventory } from "../components/Inventory";

export const Dashboard = () => {
  return (
    <>
      <Header user={headerData} />
      <main className="flex">
        <div className="w-64">
          <Sidebar />
        </div>
        <div className="flex-1 px-8 py-4 w-full overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl text-subtle-text font-bold ">Overview</h1>
            <button className="text-white py-3 px-5 bg-secondary transition-all hover:shadow-xl text-sm font-bold rounded flex gap-3">
              <span>
                <PlusCircle className="w-5 h-5" />
              </span>
              <span>ADD NEW WINE</span>
            </button>
          </div>
          <OrderOverview />
          <SalesOverview />
          <Inventory />
        </div>
      </main>
    </>
  );
};
