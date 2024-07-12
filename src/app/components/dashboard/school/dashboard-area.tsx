"use client";
import React from "react";
import DashboardHeader from "./dashboard-header";
import StudentTable from "./dashboard-model";
import "./StudentTable.css";




// props type
type IProps = {
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const DashboardArea = ({ setIsOpenSidebar }: IProps) => {
  return (
    <div className="dashboard-body outer-cont" style={{ backgroundColor: "#f0f5f3", padding: "60px 55px 50px" }}>
      <div className="position-relative">
        {/* header start */}
        <DashboardHeader setIsOpenSidebar={setIsOpenSidebar} />
        {/* header end */}
        <StudentTable />
        
      </div>
    </div>
  );
};

export default DashboardArea;
