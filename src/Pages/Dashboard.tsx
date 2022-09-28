import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import headerData from "../dummyData/header";

export const Dashboard = () => {
  return (
    <>
      <Header user={headerData} />
      <main className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="">Main content</div>
      </main>
    </>
  );
};
