import React, {useEffect} from "react";
import DashboardNoticiaEditar from "../content/noticiaEditar";
import DashboardSidebar from "../sidebar";

const Dashboard = ({slug}) => {
  
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <DashboardNoticiaEditar slug={slug} />
    </div>
  );
};

export default Dashboard;
